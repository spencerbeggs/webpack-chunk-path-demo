import { moment } from "moment";
import _ from "lodash";

export const Baz = () => (
  <div>
    <h1>Baz</h1>
    <p>{moment().format()}</p>
    {_.forEachRight(["hello", "world"], item => <p>{item}</p>)}
  </div>
);
