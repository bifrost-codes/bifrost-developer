module.exports = {
    base: '/',
    title: 'Bifrost Developer',
    description: 'bifrost developer',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon_icon.png' }]
    ],
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'Bifrost Developer',
            description: "Bifrost Developer Documentation",
        },
    },
    themeConfig: {
        displayAllHeaders: true,
        search: true,
        locales: {
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit Page',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    },
                },
                nav: [
                    {text: 'Home', link: 'https://bifrost.finance'},
                    {
                        text: 'Documentation',
                        items: [
                          {text: 'Developer', link: 'https://developer.bifrost.finance'},
                          {text: 'Whitepaper',  link: 'https://whitepaper.bifrost.finance'},
                          {text: 'Wiki', link: 'https://wiki.bifrost.finance'},
                        ],
                    },
                    {text: 'GitHub', link: 'https://github.com/bifrost-finance'},
                ],
                sidebar: [
                    {
                        title: 'Getting Started',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            ['/en/getting_started/01_overview.md', 'Overview'],
                            ['/en/getting_started/02_run_bifrost_node.md', 'Run Bifrost Node'],
                            ['/en/getting_started/03_run_bifrost_front_end.md', 'Interact With Bifrost Node'],
                        ],
                    },
                    {
                        title: 'Bifrost JS API',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            ['/en/bifrost-js/bifrost_js_api.md', 'Bifrost JS API'],
                        ],
                    },
                    {
                        title: 'Cross Chain',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            ['/en/cross-chain/eos.md', 'EOS Cross Chain'],
                            ['/en/cross-chain/iost.md', 'IOST Cross Chain'],
                        ],
                    },
                    {
                        title: 'RPC',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            ['/en/rpc/rpc.md', 'RPC Methods'],
                        ],
                    },
                    {
                        title: 'Others',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            ['/en/others/contribute.md', 'Get Involved'],
                            ['/en/others/create-module-for-bifrost.md', 'Create Module for Bifrost'],
                            ['/en/others/subkey.md', 'Subkey'],
                            ['/en/others/misc.md', 'Resource'],
                            ['/en/others/faq.md', 'FAQ'],
                        ],
                    },
                ],
            },
        },
    },
}
