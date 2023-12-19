import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cmsflush.com/" />
        <meta property="og:title" content="CMSFlush" />
        <meta property="og:description" content="A free mass deleter of Webflow CMS collection items" />
        <meta property="og:image" content="https://scottadamson26.github.io/cmsflush/background.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KR3FZ6680V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KR3FZ6680V');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
