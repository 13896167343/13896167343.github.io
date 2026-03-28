# Android Recovery：数据挂载与修复指南

安卓手机在 Recovery 下无法挂载 / 格式化 /data 分区，核心原因通常是 **FBE 加密未解除、文件系统损坏、分区表异常、TWRP/Recovery 不兼容** 或 **硬件故障**。下面按"简单 → 复杂、软件 → 硬件"给出完整排查与修复方案（**所有操作会清空数据，无备份则资料不保**）。

---

## 一、先确认：你用的是官方 Recovery 还是 TWRP？

- **官方 Recovery**：
  - 常见：`Wipe data/factory reset` 失败、提示 `Failed` / `Can't mount /data`
  - 多因：**加密、文件系统损坏、分区表异常**

- **TWRP Recovery**：
  - 常见：`Mount: Failed '/data'`、`Unable to mount storage`、格式化卡死
  - 多因：**TWRP 版本太旧不兼容 FBE/Android 版本、文件系统损坏、分区路径错误**

---

## 二、最常见：FBE 加密导致无法挂载（Android 10+ 高发）

Android 10+ 启用 **FBE（文件级加密）**，未解密时 Recovery 无法读写 /data。

### 方案 1：TWRP 内强制格式化 Data（解除加密）

1. TWRP → **Wipe** → **Format Data**（不是简单 Wipe）
2. 输入 `yes` 确认 → 等待完成
3. 完成后 **重启 Recovery**（不要直接进系统）
4. 再尝试挂载 /data、格式化、刷机

### 方案 2：官方 Recovery 解除加密

- 进入 `Factory reset` → `Format data / Wipe all data`（含内置存储）
- 部分机型需：**高级 → 格式化 data 分区（输入 yes）**

---

## 三、文件系统损坏（ext4/f2fs 错误）

表现：挂载失败、格式化时报错、卡死、提示 `Invalid argument` / `I/O error`。

### 方法 A：TWRP 内修复文件系统

1. TWRP → **Advanced → Terminal**（命令行）
2. 先卸载：

```Bash
umount /data
```

3. 修复（按文件系统选）：

```Bash
# ext4
e2fsck -fy /dev/block/by-name/userdata

# f2fs（近年机型常用）
fsck.f2fs -fy /dev/block/by-name/userdata
```

4. 完成后：

```Bash
mount /data
```

5. 再试格式化 /data

### 方法 B：Fastboot 强制格式化（绕过 Recovery）

电脑装好驱动，手机进 **Fastboot**：

```Bash
# 清空 userdata
fastboot erase userdata

# 格式化为 ext4（或 f2fs）
fastboot format:ext4 userdata
# 或 f2fs
fastboot format:f2fs userdata
```

---

## 四、TWRP 不兼容 / 版本太旧（Android 11+ 常见）

- 现象：新系统（MIUI 14/15、ColorOS 13+、Android 13/14）用旧 TWRP 必挂
- 解决：
  1. 卸载当前 TWRP，刷 **对应机型+Android版本的最新 TWRP**
  2. 优先用 **官方维护、支持 FBE 解密** 的 TWRP
  3. 不行换：**OrangeFox、PitchBlack** 等第三方 Recovery

---

## 五、分区表 / GPT 损坏（刷机中断、断电、误操作后）

表现：不仅 /data，/system、/cache 也无法挂载；提示 `Partition not found`。

### 修复（有风险）

1. 进 Fastboot
2. 重刷 **官方分区表（partition-table.img/gpt.bin）**（从官方线刷包提取）

```Bash
fastboot flash partition partition-table.img
```

3. 再格式化 userdata：

```Bash
fastboot format:ext4 userdata
```

4. 重刷系统

---

## 六、硬件层面：存储芯片（eMMC/UFS）损坏

- 特征：
  - 以上所有软件方法**全部无效**
  - 反复提示 `I/O error`、`can't write`、格式化卡死不动
  - 正常开机也无限重启、卡 Logo、提示"存储损坏"
- 处理：**硬件维修——更换主板/字库（存储芯片）**

---

## 七、完整急救流程（按顺序做）

1. **先 Format Data（TWRP/官方 Rec）输入 yes → 重启 Rec**
2. 不行 → **TWRP 终端用 e2fsck/fsck.f2fs 修复 /data**
3. 不行 → **Fastboot 下 erase + format userdata**
4. 不行 → **换最新版适配的 TWRP/OrangeFox**
5. 不行 → **重刷官方分区表 + 全量线刷官方系统**
6. 仍失败 → **判定硬件故障，送修**

---

## 八、重要提醒

- **数据一定会清空**，能进系统先备份；无法进系统基本无法保资料。
- 操作前**确保 Bootloader 已解锁**，否则很多命令会失败。
- 联发科（MTK）机型：可尝试 **SP Flash Tool 线刷官方 system+userdata** 修复分区。

---

> 需要根据你的**具体机型、Android 版本、TWRP 版本**和**报错文字**，给你定制一套可直接复制的命令吗？