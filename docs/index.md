---
layout: home

hero:
  name: 数据治理
  text: 赋能企业数字化转型
  tagline: Data Governance Solutions - Empowering Digital Transformation
  image:
    src: /hero-image.svg
    alt: 数据治理
  actions:
    - theme: brand
      text: 中文版 🇨🇳
      link: /zh/
    - theme: alt
      text: English 🇺🇸
      link: /en/
---

<style scoped>
.VPHome {
    text-align: center;
}

.language-selector {
    max-width: 800px;
    margin: 48px auto;
    padding: 48px 24px;
}

.language-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 48px;
}

.language-card {
    background: var(--vp-c-bg-soft);
    border: 2px solid var(--vp-c-divider);
    border-radius: 16px;
    padding: 48px 32px;
    transition: all 0.3s ease;
    text-align: center;
    cursor: pointer;
}

.language-card:hover {
    transform: translateY(-8px);
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.2);
}

.language-card .flag {
    font-size: 4rem;
    margin-bottom: 24px;
    display: block;
}

.language-card h2 {
    color: var(--vp-c-brand-1);
    margin: 0 0 16px 0;
    font-size: 2rem;
    border: none;
    padding: 0;
}

.language-card p {
    color: var(--vp-c-text-2);
    font-size: 1.1rem;
    margin: 0 0 24px 0;
}

.language-card a {
    display: inline-block;
    padding: 12px 32px;
    background: var(--vp-c-brand-1);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.language-card a:hover {
    background: var(--vp-c-brand-2);
    transform: translateY(-2px);
}
</style>

<div class="language-selector">
  <h1 style="font-size: 2.5rem; margin-bottom: 16px; color: var(--vp-c-text-1);">选择语言 / Choose Language</h1>
  <p style="font-size: 1.2rem; color: var(--vp-c-text-2); margin-bottom: 48px;">
    请选择您的首选语言 / Please select your preferred language
  </p>
  
  <div class="language-cards">
    <div class="language-card">
      <span class="flag">🇨🇳</span>
      <h2>简体中文</h2>
      <p>完整的中文文档和案例</p>
      <a href="/zh/">进入中文版</a>
    </div>
    
    <div class="language-card">
      <span class="flag">🇺🇸</span>
      <h2>English</h2>
      <p>Complete English Documentation</p>
      <a href="/en/">Enter English Version</a>
    </div>
  </div>
</div>
