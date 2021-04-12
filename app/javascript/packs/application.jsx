// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "bulma/css/bulma.css"
import "../src/stylesheet.css"
import {App} from "../src/components/App";
import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App/>, document.querySelector("#target"));
});
