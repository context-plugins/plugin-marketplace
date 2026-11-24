import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of update that was requested for the certificate. The following are valid values:
 * DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate.
 */
export const Type3 = {
  DomainValidationMethod: "DOMAIN_VALIDATION_METHOD",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
