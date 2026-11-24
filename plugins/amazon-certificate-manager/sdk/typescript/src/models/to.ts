import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The target validation method for the update. */
export const To = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type To = (typeof To)[keyof typeof To] | (string & {});

export const toSchema: EnumSchema<To> = s.enumOf<To>(To);
