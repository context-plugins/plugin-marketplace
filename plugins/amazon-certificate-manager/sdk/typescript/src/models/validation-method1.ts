import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by validation method. */
export const ValidationMethod1 = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethod1 = (typeof ValidationMethod1)[keyof typeof ValidationMethod1] | (string & {});

export const validationMethod1Schema: EnumSchema<ValidationMethod1> =
  s.enumOf<ValidationMethod1>(ValidationMethod1);
