import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";

export const AppRoot = ({ route }) => {
  return <div id="app-root">{renderRoutes(route.routes)}</div>;
};
