<template>
  <div class="contact-form">
    <h3
      style="
        text-align: center;
        margin-bottom: 24px;
        color: var(--vp-c-brand-1);
      "
    >
      {{ title }}
    </h3>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name"
          >{{ labels.name }} <span style="color: red">*</span></label
        >
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :placeholder="placeholders.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email"
          >{{ labels.email }} <span style="color: red">*</span></label
        >
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :placeholder="placeholders.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="company">{{ labels.company }}</label>
        <input
          type="text"
          id="company"
          v-model="formData.company"
          :placeholder="placeholders.company"
        />
      </div>

      <div class="form-group">
        <label for="message"
          >{{ labels.message }} <span style="color: red">*</span></label
        >
        <textarea
          id="message"
          v-model="formData.message"
          :placeholder="placeholders.message"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">
        {{ submitText }}
      </button>
    </form>

    <div
      v-if="submitted"
      style="
        margin-top: 20px;
        padding: 16px;
        background: var(--vp-c-brand-soft);
        border-radius: 8px;
        text-align: center;
        color: var(--vp-c-brand-1);
      "
    >
      <p style="margin: 0; font-weight: 600">{{ successMessage }}</p>
    </div>

    <div
      style="margin-top: 32px; text-align: center; color: var(--vp-c-text-2)"
    >
      <p style="margin-bottom: 8px; font-weight: 600">
        {{ contactMethodsTitle }}
      </p>
      <p style="margin: 4px 0">
        📧 {{ emailLabel }}: contact@datagovernance.com
      </p>
      <p style="margin: 4px 0">📞 {{ phoneLabel }}: +86 400-123-4567</p>
      <p style="margin: 4px 0">🏢 {{ addressLabel }}: {{ addressText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const submitted = ref(false)

const isEnglish = computed(() => lang.value === 'en-US')

const title = computed(() => (isEnglish.value ? 'Contact Us' : '联系我们'))

const labels = computed(() =>
  isEnglish.value
    ? { name: 'Name', email: 'Email', company: 'Company', message: 'Message' }
    : { name: '姓名', email: '邮箱', company: '公司', message: '留言' }
)

const placeholders = computed(() =>
  isEnglish.value
    ? {
        name: 'Your name',
        email: 'your.email@company.com',
        company: 'Your company name',
        message: 'Please describe your needs...'
      }
    : {
        name: '请输入您的姓名',
        email: 'your.email@company.com',
        company: '请输入您的公司名称',
        message: '请描述您的需求...'
      }
)

const submitText = computed(() => (isEnglish.value ? 'Submit' : '提交'))

const successMessage = computed(() =>
  isEnglish.value
    ? '✓ Thank you! We will contact you soon.'
    : '✓ 感谢您的留言！我们会尽快与您联系。'
)

const contactMethodsTitle = computed(() =>
  isEnglish.value ? 'Or contact us via:' : '或通过以下方式联系我们：'
)

const emailLabel = computed(() => (isEnglish.value ? 'Email' : '邮箱'))
const phoneLabel = computed(() => (isEnglish.value ? 'Phone' : '电话'))
const addressLabel = computed(() => (isEnglish.value ? 'Address' : '地址'))
const addressText = computed(() =>
  isEnglish.value
    ? 'Floor 10, Building A, Data Industry Park, Chaoyang District, Beijing'
    : '北京市朝阳区数据产业园 A座 10层'
)

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  submitted.value = true

  // 3秒后重置表单
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      company: '',
      message: ''
    }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
/* 组件特定样式已在 custom.css 中定义 */
</style>
