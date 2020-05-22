import NativeDocument, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class Document extends NativeDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NativeDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Manager słoików</title>
          <meta
            name="description"
            content="Manager do zarządzania budżetem w postaci słoików"
          />
          <meta name="author" content="Adam Lewkowicz" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="Shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;