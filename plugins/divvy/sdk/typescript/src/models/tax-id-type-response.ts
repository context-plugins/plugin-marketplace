import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The enum Tax id type enum. */
export const TaxIdTypeResponse = {
  Ein: "EIN",
  Ssn: "SSN",
  Undefined: "UNDEFINED",
} as const;
export type TaxIdTypeResponse = (typeof TaxIdTypeResponse)[keyof typeof TaxIdTypeResponse] | (string & {});

export const taxIdTypeResponseSchema: EnumSchema<TaxIdTypeResponse> =
  s.enumOf<TaxIdTypeResponse>(TaxIdTypeResponse);
