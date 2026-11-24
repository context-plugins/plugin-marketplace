import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit */
export const FormatDeliverdDevTasksApi = {
  Deliverd: "deliverd",
  Promptfoo: "promptfoo",
  Inspect: "inspect",
  Garak: "garak",
  Weave: "weave",
  Braintrust: "braintrust",
  Junit: "junit",
} as const;
export type FormatDeliverdDevTasksApi =
  | (typeof FormatDeliverdDevTasksApi)[keyof typeof FormatDeliverdDevTasksApi]
  | (string & {});

export const formatDeliverdDevTasksApiSchema: EnumSchema<FormatDeliverdDevTasksApi> =
  s.enumOf<FormatDeliverdDevTasksApi>(FormatDeliverdDevTasksApi);
