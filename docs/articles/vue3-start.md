# Vue3 入门指南

Vue 3 是 Vue.js 框架的最新 major 版本，带来了很多新特性～

## 组合式 API

Vue3 引入了 Composition API，让代码组织更加灵活：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }}
  </button>
</template>
```

## 响应式系统

Vue3 使用 Proxy 重写了响应式系统，性能更好～

## 更多学习

- [Vue 官方文档](https://vuejs.org)
- [Vue Router](https://router.vuejs.org)
- [Pinia](https://pinia.vuejs.org)

---

Happy coding! 🚀