import * as joi from "joi";
// import * as debug from "debug";
import { Parameter, Route } from "vingle-corgi";

export const routes = Route.POST("/payload", {
  desc: "Get event payload",
  operationId: "onEvent",
}, {
  action: Parameter.Body(joi.string()),
}, async function() {
  const action = this.params.action as string;
  console.log("LOGOOGOGG: ", action);
  return this.json({
    data: action
  });
});
