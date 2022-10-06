// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eki.Lab',
  tagline: 'EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company',
  url: 'https://eki-ghazouani.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eki-ghazouani', // Usually your GitHub org/user name.
  projectName: 'ekimetrics.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-124520099-9',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          postsPerPage: 9,
          blogSidebarCount: 0,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:"/img/homepage_banner.jpg",
      navbar: {
        title: 'Eki.Lab',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
      
        items: [

          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },

          
          {to: 'https://ekimetrics.com/fr/', label: 'Ekimetrics website', position: 'right'},
          {href: 'mailto:inno@ekimetrics.com', label: 'Contact us!', position: 'right'},
        ],
      },
      colorMode:{
        defaultMode:"dark",
        disableSwitch:true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About us',
            items: [
              {
                label: 'Who we are ?',
                to: 'https://ekimetrics.com/who-we-are/',
              },
              {
                label: 'Our team',
                to: 'https://ekimetrics.com/our-team/',
              },
              {
                label: 'Subscribe to our newsletter',
                to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9',
              },
            ],
          },
          {
            title: 'Find us',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/ekimetrics',
              },
              {
                label: 'Careers',
                href: 'https://ekimetrics.com/careers/',
              },
              {
                label: 'Eki on Welcome to the jungle',
                href: 'https://www.welcometothejungle.com/fr/companies/ekimetrics',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Get in touch with our teams',
                href: 'mailto:inno@ekimetrics.com',
              },
            ],
          },
          
        ],
        
      },
    }),
};

module.exports = config;
