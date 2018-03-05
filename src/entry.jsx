import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { renderRoutes } from "react-router-config";
import { Routes } from "./routes.jsx";

class Entry extends Component {
  render() {
    return (
      <main>
        <header>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
          <Link to="/baz">Baz</Link>
        </header>
        <section id="page">{renderRoutes(Routes)}</section>
      </main>
    );
  }
}

render(<Entry />, document.getElementsByTagName("main")[0]);
