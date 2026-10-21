import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internalTool2Schema, type InternalTool2 } from "./internal-tool2.js";
import { context11Schema, type Context11 } from "./unions/context11.js";
import { defaultsSchema, type Defaults } from "./unions/defaults.js";
import { endpointSchema, type Endpoint } from "./unions/endpoint.js";
import { optionsSchema, type Options } from "./unions/options.js";
import { responseDisplaySchema, type ResponseDisplay } from "./unions/response-display.js";
import { result1Schema, type Result1 } from "./unions/result1.js";
import { staticParametersSchema, type StaticParameters } from "./unions/static-parameters.js";
import { type6Schema, type Type6 } from "./unions/type6.js";

/** Full tool definition for this version (same shape as ToolResponse.definition). */
export type ToolDefinition2 = {
  /** The action to take when the LLM calls the tool. */
  type?: Type6;
  /** The tool definition to be used by the OpenAI API. */
  tool: InternalTool2;
  /** The configuration for an HTTP API call. */
  endpoint?: Endpoint;
  /** The configuration for a context tool. */
  context?: Context11;
  /** The default values for the parameters of the function/tool call. */
  defaults?: Defaults;
  /**
   * Parameters for the tool whose values should be set at config time (i.e., not provided by the
   * LLM).
   */
  staticParameters?: StaticParameters;
  /** The optional result of the tool call. */
  result?: Result1;
  /**
   * The options for the tool. Ie allows to propagate the tool result to the caller via
   * propagate_tool_result flag.
   */
  options?: Options;
  /** Optional mapping used to format propagated results in live chat responses. */
  responseDisplay?: ResponseDisplay;
};

export const toolDefinition2Schema: Schema<ToolDefinition2> = s.object<ToolDefinition2>({
  type: s.optional(s.lazy(() => type6Schema)),
  tool: internalTool2Schema,
  endpoint: s.optional(s.lazy(() => endpointSchema)),
  context: s.optional(s.lazy(() => context11Schema)),
  defaults: s.optional(s.lazy(() => defaultsSchema)),
  staticParameters: s.optional(s.lazy(() => staticParametersSchema)),
  result: s.optional(s.lazy(() => result1Schema)),
  options: s.optional(s.lazy(() => optionsSchema)),
  responseDisplay: s.optional(s.lazy(() => responseDisplaySchema)),
  _keysMap: {
    staticParameters: "static_parameters",
    responseDisplay: "response_display",
  },
});
