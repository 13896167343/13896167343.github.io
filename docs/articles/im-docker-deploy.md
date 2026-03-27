# Docker Compose 一键部署开源 IM 项目

以下是目前主流开源 IM 项目中，**明确支持 Docker / Docker Compose 一键部署**的清单，按推荐度排序。

---

## ✅ 完全支持 Docker（强烈推荐）

### 1. OpenIM

- **协议**：Apache-2.0
- **Docker**：✅ 官方 Docker Compose
- **部署命令**：
```bash
docker-compose up -d
```
- **备注**：自带依赖（Mongo/Redis/Kafka/MinIO），生产可用

### 2. TangSengDaoDao（唐僧叨叨）

- **协议**：Apache-2.0
- **Docker**：✅ 官方 Docker Compose
- **备注**：服务端+Web+管理后台全容器化

### 3. Mattermost（社区版）

- **协议**：MIT/Apache-2.0
- **Docker**：✅ 官方 Docker 镜像
- **备注**：最成熟的团队协作 IM，Docker 部署极简单

### 4. Rocket.Chat

- **协议**：MIT
- **Docker**：✅ 官方 Docker Compose
- **备注**：全功能，一键起服务+数据库

### 5. Fiora

- **协议**：MIT
- **Docker**：✅ Docker Compose
- **备注**：Node.js 栈，一键启动前后端

### 6. Tailchat

- **协议**：Apache-2.0
- **Docker**：✅ 官方 Docker 部署
- **备注**：模块化、插件化，容器友好

### 7. LumenIM

- **协议**：MIT
- **Docker**：✅ Docker Compose
- **备注**：纯网页 IM，轻量快速

### 8. DuckChat

- **协议**：MIT
- **Docker**：✅ Docker 一键部署
- **备注**：PHP 栈，适合快速私有 IM/客服

### 9. SN

- **协议**：MIT
- **Docker**：✅ Docker Compose
- **备注**：极简、端到端加密

---

## ⚠️ 部分支持 / 需手动构建

### 10. 野火 IM（WildfireChat）

- **Docker**：⚠️ 社区版有 Dockerfile，但非官方一键
- **备注**：需自行编排数据库等

### 11. J-IM

- **Docker**：⚠️ 提供 Dockerfile，需手动构建
- **备注**：Java 高性能栈

### 12. 盒子 IM（BoxIM）

- **Docker**：⚠️ 可容器化，但无官方 Compose
- **备注**：轻量，适合二次封装

### 13. KChat

- **Docker**：⚠️ 可 Docker 化，非官方维护
- **备注**：PHP 小团队 IM

---

## ❌ 不支持 Docker

- **MobileIMSDK**：纯 SDK，无服务端容器化
- **BeaverIM（海狸 IM）**：.NET 桌面优先，无 Docker
- **JuggleIM**：文档未提及 Docker 支持
- **Dodolinks**：微服务但无公开容器方案

---

## 🔥 最佳 Docker 部署推荐

| 场景 | 推荐项目 |
|------|----------|
| 企业级、一键起 | OpenIM |
| 团队协作、成熟稳定 | Mattermost |
| 快速仿微信、全开源 | TangSengDaoDao |
| 类 Discord、轻量 | Fiora |

---

> 需要我给你提供 OpenIM / TangSengDaoDao / Mattermost 的 Docker Compose 一键部署脚本（含数据库、缓存、MinIO 全套）吗？
