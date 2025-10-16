<template>
  <div class="feature-card">
    <div class="icon-wrapper">
      <span class="icon">{{ icon }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* 组件特定样式已在 custom.css 中定义 */
</style>
