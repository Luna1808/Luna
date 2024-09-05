import React from "react";
import PropTypes from "prop-types";

import Imput  from "../components/atoms/Imput";

const Formulario = () => {
  return (
    <form>
      <h1>Contact US</h1>

      <article>
      <Imput text="First Name" type="text"></Imput>
      <Imput text="Last Name" type="text"></Imput>

      <label>
          <span>First Name</span>
        </label>
      </article>

      <label>
        <span>Email Address</span>
      </label>
      <article>

        <label>
          <span>Query type</span>
        </label>
        <label>
          <span>Query type</span>
        </label>
      </article>
    </form>
  );
};

export default Formulario;
