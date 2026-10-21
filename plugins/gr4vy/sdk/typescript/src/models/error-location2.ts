import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The part of the request where the property can be found that caused the error. */
export const ErrorLocation2 = {
  Query: "query",
  Body: "body",
  Path: "path",
  Header: "header",
  Unknown: "unknown",
} as const;
export type ErrorLocation2 = (typeof ErrorLocation2)[keyof typeof ErrorLocation2] | (string & {});

export const errorLocation2Schema: EnumSchema<ErrorLocation2> = s.enumOf<ErrorLocation2>(ErrorLocation2);
