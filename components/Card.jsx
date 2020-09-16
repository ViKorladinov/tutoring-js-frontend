import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const Card = ({ title, index }) => {
  index += 1;
  return (
    <Link href={"/" + title}>
      <div
        style={{ animationDuration: (index > 3 ? index - 3 : index) + "s" }}
        className="card"
      >
        <h3>
          <FormattedMessage id={title} /> &rarr;
        </h3>
        <p>
          <FormattedMessage id={title + "_text"} />
        </p>
        <style jsx>{`
          .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #A0A0A0;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #eb5757;
            border-color: #eb5757;
            cursor:pointer;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (min-width: 1030px) {
            .card {
              flex-basis: 25%;
            }
          }
          @media (max-width: 1030px) {
            .card {
              flex-basis: 45%;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

export default Card;
