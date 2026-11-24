import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Credit Status DTO. */
export const CreditStatusDto = {
  FullyApplied: "FULLY_APPLIED",
  NotApplied: "NOT_APPLIED",
  PartiallyApplied: "PARTIALLY_APPLIED",
  InProcess: "IN_PROCESS",
  Undefined: "UNDEFINED",
} as const;
export type CreditStatusDto = (typeof CreditStatusDto)[keyof typeof CreditStatusDto] | (string & {});

export const creditStatusDtoSchema: EnumSchema<CreditStatusDto> = s.enumOf<CreditStatusDto>(CreditStatusDto);
