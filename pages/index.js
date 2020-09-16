import Head from "next/head";
import { FormattedMessage } from "react-intl";
import Card from "../components/Card";
import { global } from 'styled-jsx/css'

export default function Home() {
  const cards = () => {
    const arr = [
      "schedule",
      "tutors",
      "pricing",
      "materials",
      "contact",
      "subjects",
    ];
    return arr.map((element, index) => {
      return <Card key={index} index={index} title={element} />;
    });
  };
  return (
    <div className="container">
      <Head>
        <title>Tutoring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <FormattedMessage id="welcome" />
          <span>
            <FormattedMessage id="tutoring" />
          </span>
          <FormattedMessage id="welcome_2" />
        </h1>

        <p className="description">
          <FormattedMessage id="tryout" />
        </p>

        <div className="grid">{cards()}</div>
      </main>

      <footer>Viktor Korladinov | 2020</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: max(6vh, 35px);
          border-top: 1px solid #A0A0A0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title span {
          color: #eb5757;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin-top: 3rem;
        }

        @media (max-width: 740px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
</div>
  );
}
