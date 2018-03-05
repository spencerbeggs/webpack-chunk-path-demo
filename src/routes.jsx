import { AppRoot } from "./root.jsx";
import Loadable from "react-loadable";

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export const Routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: "/",
        exact: true,
        component: Loadable({
          loader: () =>
            import(/* webpackChunkName: "home" */ "./pages/home.jsx"),
          loading: Loading
        })
      },
      {
        path: "/foo",
        exact: true,
        component: Loadable({
          loader: () => import(/* webpackChunkName: "foo" */ "./pages/foo.jsx"),
          loading: Loading
        })
      },
      {
        path: "/bar",
        component: Loadable({
          loader: () => import(/* webpackChunkName: "bar" */ "./pages/bar.jsx"),
          loading: Loading
        })
      },
      {
        path: "/baz",
        component: Loadable({
          loader: () => import(/* webpackChunkName: "baz" */ "./pages/baz.jsx"),
          loading: Loading
        })
      }
    ]
  }
];
