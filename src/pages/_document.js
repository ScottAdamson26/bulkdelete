import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cmsflush.com/" />
        <meta property="og:title" content="CMSFlush" />
        <meta property="og:description" content="A free mass deleter of Webflow CMS collection items" />
        <meta property="og:image" content="https://scottadamson25.github.io/cmsflush/background.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
