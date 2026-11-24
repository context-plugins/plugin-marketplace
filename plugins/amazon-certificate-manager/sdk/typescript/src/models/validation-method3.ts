import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The domain validation method for the certificate. To migrate from email to DNS validation,
 * specify DNS.
 */
export const ValidationMethod3 = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type ValidationMethod3 = (typeof ValidationMethod3)[keyof typeof ValidationMethod3] | (string & {});

export const validationMethod3Schema: EnumSchema<ValidationMethod3> =
  s.enumOf<ValidationMethod3>(ValidationMethod3);
