import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxExemptStatus = {
  None: "none",
  Exempt: "exempt",
  Reverse: "reverse",
} as const;
export type TaxExemptStatus = (typeof TaxExemptStatus)[keyof typeof TaxExemptStatus] | (string & {});

export const taxExemptStatusSchema: EnumSchema<TaxExemptStatus> = s.enumOf<TaxExemptStatus>(TaxExemptStatus);
