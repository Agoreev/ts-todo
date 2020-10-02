import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
        explicabo, quibusdam neque vel dolorum quam alias hic earum molestias.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to list
      </button>
    </>
  );
};
