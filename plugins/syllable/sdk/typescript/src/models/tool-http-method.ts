import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method to use for a tool HTTP request. */
export const ToolHttpMethod = {
  Get: "get",
  Post: "post",
  Put: "put",
  Delete: "delete",
} as const;
export type ToolHttpMethod = (typeof ToolHttpMethod)[keyof typeof ToolHttpMethod] | (string & {});

export const toolHttpMethodSchema: EnumSchema<ToolHttpMethod> = s.enumOf<ToolHttpMethod>(ToolHttpMethod);
