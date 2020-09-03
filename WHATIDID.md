# Sage On Math

1. Clone gatsby new gatsby-theme
```bash
gatsby new gatsby-gitbook-starter https://github.com/hasura/gatsby-gitbook-starter
```
2. Modify _gatsby-config.js_ file to adjust katex in the mdx. Edit _gatsby-plugin-mdx_
```js
{
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        },
        {
          resolve: `gatsby-remark-katex`  // What need to be added.
        }
      ],
      plugins: [
        `gatsby-remark-katex`  // What need to be added.
      ],
      extensions: [".mdx", ".md"]
    }
  },
```
3. Add the following lines in _gatsby-browser.js_
```js
import "katex/dist/katex.min.css"
```
4. Install corresponding plugins
```bash
npm install --save gatsby-remark-katex katex
```
5. Enjoy :D

