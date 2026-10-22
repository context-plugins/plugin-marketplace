import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorLocation = {
  Query: "query",
  Body: "body",
  Path: "path",
  Header: "header",
  Unknown: "unknown",
} as const;
export type ErrorLocation = (typeof ErrorLocation)[keyof typeof ErrorLocation] | (string & {});

export const errorLocationSchema: EnumSchema<ErrorLocation> = s.enumOf<ErrorLocation>(ErrorLocation);
