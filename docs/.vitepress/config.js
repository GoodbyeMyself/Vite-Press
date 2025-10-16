import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '数据治理解决方案',
    description: '高效、安全、合规的数据管理解决方案',
    lang: 'zh-CN',
    base: '/',

    // 本地化配置
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                logo: '/logo.svg',
                siteTitle: '数据治理',

                // 导航栏
                nav: [
                    {
                        text: '数据治理概述',
                        link: '/zh/what-is-data-governance/'
                    },
                    {
                        text: '实施指南',
                        link: '/zh/implementation/'
                    },
                    {
                        text: '成功案例',
                        link: '/zh/cases/'
                    }
                ],

                // 侧边栏 - 根据路径动态显示
                sidebar: {
                    // 核心内容页面的侧边栏
                    '/zh/what-is-data-governance/': [
                        {
                            text: '核心内容',
                            items: [
                                {
                                    text: '数据治理概述',
                                    link: '/zh/what-is-data-governance/'
                                },
                                {
                                    text: '业务益处',
                                    link: '/zh/what-is-data-governance/benefits'
                                }
                            ]
                        }
                    ],
                    // 实施指南页面的侧边栏
                    '/zh/implementation/': [
                        {
                            text: '实施指南',
                            items: [
                                {
                                    text: '实施指南',
                                    link: '/zh/implementation/'
                                }
                            ]
                        }
                    ],
                    // 成功案例页面的侧边栏
                    '/zh/cases/': [
                        {
                            text: '成功案例',
                            items: [
                                {
                                    text: '某大型商业银行',
                                    link: '/zh/cases/bank'
                                },
                                {
                                    text: '某三甲医院',
                                    link: '/zh/cases/hospital'
                                },
                                {
                                    text: '某电商企业',
                                    link: '/zh/cases/ecommerce'
                                },
                                {
                                    text: '某汽车制造企业',
                                    link: '/zh/cases/manufacturing'
                                }
                            ]
                        }
                    ]
                },

                // 页脚
                footer: {
                    message: '基于 VitePress 构建',
                    copyright: 'Copyright © 2025 数据治理解决方案'
                },

                // 搜索
                search: {
                    provider: 'local',
                    options: {
                        locales: {
                            root: {
                                translations: {
                                    button: {
                                        buttonText: '搜索文档',
                                        buttonAriaLabel: '搜索文档'
                                    },
                                    modal: {
                                        noResultsText: '无法找到相关结果',
                                        resetButtonTitle: '清除查询条件',
                                        footer: {
                                            selectText: '选择',
                                            navigateText: '切换',
                                            closeText: '关闭'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },

                // 文档页脚
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },

                // 大纲
                outline: {
                    label: '页面导航',
                    level: [2, 3]
                },

                // 最后更新时间
                lastUpdated: {
                    text: '最后更新于',
                    formatOptions: {
                        dateStyle: 'short',
                        timeStyle: 'medium'
                    }
                }
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            themeConfig: {
                logo: '/logo.svg',
                siteTitle: 'Data Governance',

                // Navigation bar
                nav: [
                    {
                        text: 'Data Governance Overview',
                        link: '/en/what-is-data-governance/'
                    },
                    {
                        text: 'Implementation Guide',
                        link: '/en/implementation/'
                    },
                    { text: 'Success Stories', link: '/en/cases/' }
                ],

                // Sidebar - dynamically display based on path
                sidebar: {
                    // Sidebar for core content pages
                    '/en/what-is-data-governance/': [
                        {
                            text: 'Core Content',
                            items: [
                                {
                                    text: 'Data Governance Overview',
                                    link: '/en/what-is-data-governance/'
                                },
                                {
                                    text: 'Business Benefits',
                                    link: '/en/what-is-data-governance/benefits'
                                }
                            ]
                        }
                    ],
                    // Sidebar for implementation guide pages
                    '/en/implementation/': [
                        {
                            text: 'Implementation Guide',
                            items: [
                                {
                                    text: 'Implementation Guide',
                                    link: '/en/implementation/'
                                }
                            ]
                        }
                    ],
                    // Sidebar for success stories pages
                    '/en/cases/': [
                        {
                            text: 'Success Stories',
                            items: [
                                {
                                    text: 'Major Commercial Bank',
                                    link: '/en/cases/bank'
                                },
                                {
                                    text: 'Tier-3 Hospital',
                                    link: '/en/cases/hospital'
                                },
                                {
                                    text: 'E-commerce Company',
                                    link: '/en/cases/ecommerce'
                                },
                                {
                                    text: 'Auto Manufacturer',
                                    link: '/en/cases/manufacturing'
                                }
                            ]
                        }
                    ]
                },

                footer: {
                    message: 'Built with VitePress',
                    copyright: 'Copyright © 2025 Data Governance Solutions'
                },

                search: {
                    provider: 'local',
                    options: {
                        locales: {
                            en: {
                                translations: {
                                    button: {
                                        buttonText: 'Search',
                                        buttonAriaLabel: 'Search'
                                    },
                                    modal: {
                                        noResultsText: 'No results found',
                                        resetButtonTitle: 'Clear search',
                                        footer: {
                                            selectText: 'Select',
                                            navigateText: 'Navigate',
                                            closeText: 'Close'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },

                docFooter: {
                    prev: 'Previous',
                    next: 'Next'
                },

                outline: {
                    label: 'On this page',
                    level: [2, 3]
                },

                lastUpdated: {
                    text: 'Last updated',
                    formatOptions: {
                        dateStyle: 'short',
                        timeStyle: 'medium'
                    }
                }
            }
        }
    },

    // 主题配置
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: '数据治理'
    },

    // Head 配置
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#007BFF' }],
        [
            'meta',
            {
                name: 'keywords',
                content: '数据治理,数据管理,数据合规,数据质量,Data Governance'
            }
        ]
    ],

    // Markdown 配置
    markdown: {
        lineNumbers: true,
        image: {
            lazyLoading: true
        }
    }
})
