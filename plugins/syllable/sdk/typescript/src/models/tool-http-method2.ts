import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method to use for the service call. */
export const ToolHttpMethod2 = {
  Get: "get",
  Post: "post",
  Put: "put",
  Delete: "delete",
} as const;
export type ToolHttpMethod2 = (typeof ToolHttpMethod2)[keyof typeof ToolHttpMethod2] | (string & {});

export const toolHttpMethod2Schema: EnumSchema<ToolHttpMethod2> = s.enumOf<ToolHttpMethod2>(ToolHttpMethod2);
