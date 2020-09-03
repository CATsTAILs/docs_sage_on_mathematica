const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://seonhwa17kim.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://seonhwa17kim.netlify.app',
    title:
      "<a href='https://seonhwa17kim.netlify.app/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/CATsTAILs/docs_sage_on_mathematica',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
		//     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		//       <div class="twitterBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
		//   </li>
		// 	<li>
		//     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		//       <div class="discordBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		//       </div>
		//     </a>
    //   </li>`,
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://seonhwa17kim.netlify.app'>Seonhwa</a><div class='greenCircle'></div><a href='https://seonhwa17kim.netlify.app'>Kim</a>",
  },
  siteMetadata: {
    title: 'KnotProject_SOM',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/CATsTAILs/docs_sage_on_mathematica/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
