import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the domain validation method. */
export const ValidationMethod = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethod = (typeof ValidationMethod)[keyof typeof ValidationMethod] | (string & {});

export const validationMethodSchema: EnumSchema<ValidationMethod> =
  s.enumOf<ValidationMethod>(ValidationMethod);
