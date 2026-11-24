import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = None 1 = CashDiscount 3 = Commission 5 = ManagementFee 7 = Roundings 9 = Retentions */
export const DeductionType = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
} as const;
export type DeductionType = (typeof DeductionType)[keyof typeof DeductionType] | (number & {});

export const deductionTypeSchema: EnumSchema<DeductionType> = s.enumOf<DeductionType>(DeductionType);
