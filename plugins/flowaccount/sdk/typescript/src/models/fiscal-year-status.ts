import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Current 3 = Opening 5 = Closed */
export const FiscalYearStatus = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type FiscalYearStatus = (typeof FiscalYearStatus)[keyof typeof FiscalYearStatus] | (number & {});

export const fiscalYearStatusSchema: EnumSchema<FiscalYearStatus> =
  s.enumOf<FiscalYearStatus>(FiscalYearStatus);
