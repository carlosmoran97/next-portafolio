import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content=" A site for my programming portafolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, no follow" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>{`
            body {
              margin: 0;
              font-size: 110%;
              font-family: 'Roboto', sans-serif;
              background: #f0f0f0;
              box-sizing: border-box;
            }
            #nprogress .bar {
              background: #ffbb00 !important;
            }

            #nprogress .peg {
              box-shadow: 0 0 10px #ffbb00, 0 0 5px #ffbb00;
            }

            #nprogress .spinner-icon {
              border-top-color: #ffbb00;
              border-left-color: #ffbb00;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
