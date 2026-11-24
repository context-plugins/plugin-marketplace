import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method you want to use if you are requesting a public certificate to validate that you own or
 * control domain. You can validate with DNS or validate with email. We recommend that you use DNS
 * validation.
 */
export const ValidationMethod4 = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethod4 = (typeof ValidationMethod4)[keyof typeof ValidationMethod4] | (string & {});

export const validationMethod4Schema: EnumSchema<ValidationMethod4> =
  s.enumOf<ValidationMethod4>(ValidationMethod4);
