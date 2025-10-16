<template>
  <div class="case-card">
    <span class="industry">{{ industry }}</span>
    <h3>{{ title }}</h3>

    <div class="section">
      <h4>🎯 {{ challengeLabel }}</h4>
      <p>{{ challenge }}</p>
    </div>

    <div class="section">
      <h4>💡 {{ solutionLabel }}</h4>
      <p>{{ solution }}</p>
    </div>

    <div class="section">
      <h4>📊 {{ resultLabel }}</h4>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  industry: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  challenge: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  }
})

const { lang } = useData()

const isEnglish = computed(() => lang.value === 'en-US')

const challengeLabel = computed(() => (isEnglish.value ? 'Challenge' : '挑战'))
const solutionLabel = computed(() =>
  isEnglish.value ? 'Solution' : '解决方案'
)
const resultLabel = computed(() => (isEnglish.value ? 'Result' : '成果'))
</script>

<style scoped>
/* 组件特定样式已在 custom.css 中定义 */
</style>
