---
title: FlareSolverr 部署教程
date: 2025-11-22
tags: [Docker, 教程, 代理, 爬虫]
category: 教程
author: by三生
---

# FlareSolverr 部署教程：绕过 Cloudflare 的反爬虫保护

## 前言

FlareSolverr 是一个用于绕过 Cloudflare 反爬虫保护的工具。其核心工作原理是模拟一个真实的浏览器，当你向它发送请求后，它会在后台启动一个基于 Chrome 的浏览器实例，访问你指定的目标 URL，并自动完成 Cloudflare 设置的验证挑战。

> [!note] 提示
> Docker 是必须的

如果你已经有了相应的环境，则可以跳过该部分

## 1、环境配置

### 1.1、安装 Docker

具体安装方法可以查看 [Docker 教程](https://docs.docker.com/get-docker/) 的说明

## 2、部署 FlareSolverr

### 2.1、新建文件夹

> [!tip] 提示
> 所有 `<path>` 请自行替换成个人实际目录

```bash
mkdir -p <path>/flaresolverr/ && cd <path>/flaresolverr/
```

### 2.2、编写 docker-compose 配置文件

```bash
sudo nano docker-compose.yml
```

添加以下内容：

```yaml
services:
  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    ports:
      - 8191:8191
    environment:
      - LOG_LEVEL=info
      - TZ=Asia/Shanghai
    restart: unless-stopped
```

也可自行添加代理，例如：

```yaml
services:
  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    ports:
      - 8191:8191
    environment:
      - LOG_LEVEL=info
      - TZ=Asia/Shanghai
      - HTTP_PROXY=http://172.17.0.1:8118
      - HTTPS_PROXY=http://172.17.0.1:8118
      - NO_PROXY=localhost,127.0.0.1
    restart: unless-stopped
```

### 2.3、启动 FlareSolverr

```bash
docker compose up -d
```

### 2.4、关闭 FlareSolverr

```bash
docker compose down
```

## 3、使用示例

### 3.1、直接使用

```bash
curl -X POST "http://127.0.0.1:8191/v1" \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "request.get",
    "url": "https://www.google.com/",
    "maxTimeout": 180000
  }'
```

### 3.2、通过会话来使用

> [!tip] 提示
> 所有 `<session_id>` 请自行替换成个人实际选择的「会话ID」

**创建会话**

```bash
curl -X POST "http://127.0.0.1:8191/v1" \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "sessions.create",
    "session": "<session_id>"
  }'
```

**使用会话**

```bash
curl -X POST "http://127.0.0.1:8191/v1" \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "request.get",
    "url": "https://www.google.com/",
    "session": "<session_id>",
    "maxTimeout": 180000
  }' \
  --max-time 180
```

**删除会话**

```bash
curl -X POST "http://127.0.0.1:8191/v1" \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "sessions.destroy",
    "session": "<session_id>"
  }'
```

## 相关链接

- 🌐 开源地址: https://github.com/FlareSolverr/FlareSolverr
- 📄 原文链接: https://bysansheng.cn/posts/flaresolverr-部署教程/
- 🐳 Docker 镜像: ghcr.io/flaresolverr/flaresolverr:latest

---

*标签: #Docker #教程 #代理 #爬虫*
