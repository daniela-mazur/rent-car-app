import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { modules } from "modules";

import { PrivateRoute } from "./private-route";
import { PublicRoute } from "./public-route";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        {modules.map((module) => {
          const RouteComponent = module.private ? PrivateRoute : PublicRoute;

          console.log("map", module);

          return <RouteComponent key={module.name} {...module} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export { RouterContainer };
