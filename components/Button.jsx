import React from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const Button = (props) => {
  const { text, path } = props;
  return (
    <div className="bttn">
      <Link href={path}>
        <a>
          <FormattedMessage id={text} />
        </a>
      </Link>
      <style jsx>{`
        a {
        display: inline-block;
          text-decoration: none;
          color: #eb5757;
          font-weight: bold;
        }
        .bttn {
          white-space: nowrap;
          height: fit-content;
          padding: 1em;
          margin:1em;
          border: 1px solid #eb5757;
          border-radius: 14px;
        }
      `}</style>
    </div>
  );
};

export default Button;
