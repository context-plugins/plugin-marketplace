import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to pass the arguments to the request. */
export const ToolArgumentLocation2 = {
  Body: "body",
  Form: "form",
  Path: "path",
  Query: "query",
} as const;
export type ToolArgumentLocation2 =
  | (typeof ToolArgumentLocation2)[keyof typeof ToolArgumentLocation2]
  | (string & {});

export const toolArgumentLocation2Schema: EnumSchema<ToolArgumentLocation2> =
  s.enumOf<ToolArgumentLocation2>(ToolArgumentLocation2);
