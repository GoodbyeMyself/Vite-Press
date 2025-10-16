import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ContactForm from './components/ContactForm.vue'
import FeatureCard from './components/FeatureCard.vue'
import CaseCard from './components/CaseCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('ContactForm', ContactForm)
    app.component('FeatureCard', FeatureCard)
    app.component('CaseCard', CaseCard)
  }
}
