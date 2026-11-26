import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The enum Tax id type enum. */
export const TaxIdTypeRequest = {
  Ein: "EIN",
  Ssn: "SSN",
} as const;
export type TaxIdTypeRequest = (typeof TaxIdTypeRequest)[keyof typeof TaxIdTypeRequest] | (string & {});

export const taxIdTypeRequestSchema: EnumSchema<TaxIdTypeRequest> =
  s.enumOf<TaxIdTypeRequest>(TaxIdTypeRequest);
