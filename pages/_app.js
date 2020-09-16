import { I18nProvider, LOCALES } from "../src/i18n";

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider locale={LOCALES.ENGLISH}>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        
      `}</style>
    </I18nProvider>
  );
}

export default MyApp;
