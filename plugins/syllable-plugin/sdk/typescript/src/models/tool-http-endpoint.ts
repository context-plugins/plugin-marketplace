import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolArgumentLocation2Schema, type ToolArgumentLocation2 } from "./tool-argument-location2.js";
import { toolHttpMethod2Schema, type ToolHttpMethod2 } from "./tool-http-method2.js";
import { timeoutSchema, type Timeout } from "./unions/timeout.js";

/** The configuration for an HTTP API call by a tool. */
export type ToolHttpEndpoint = {
  /** The endpoint URL of the external service to call. */
  url: string;
  /** The HTTP method to use for the service call. */
  method: ToolHttpMethod2;
  /** How to pass the arguments to the request. */
  argumentLocation: ToolArgumentLocation2;
  /** Timeout in seconds for the HTTP request. Default 20 seconds when not set. */
  timeout?: Timeout;
};

export const toolHttpEndpointSchema: Schema<ToolHttpEndpoint> = s.object<ToolHttpEndpoint>({
  url: s.string(),
  method: toolHttpMethod2Schema,
  argumentLocation: toolArgumentLocation2Schema,
  timeout: s.optional(s.lazy(() => timeoutSchema)),
  _keysMap: {
    argumentLocation: "argument_location",
  },
});
