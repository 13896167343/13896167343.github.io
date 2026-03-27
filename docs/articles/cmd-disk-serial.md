# 在 CMD 中查询硬盘序列号的常用命令

在 CMD 里查硬盘序列号，常用这几条命令，直接复制运行就行：

## 1. 查硬盘物理序列号（最准）

```
wmic diskdrive get serialnumber
```

## 2. 查分区序列号（格式化后会变）

```
vol C:
```

## 3. 更详细硬盘信息

```
wmic diskdrive get caption,serialnumber,size
```

## 4. PowerShell 方式（更清晰）

```powershell
Get-PhysicalDisk | Select-Object SerialNumber, FriendlyName
```

> 直接打开命令提示符，粘贴回车就能看到。
