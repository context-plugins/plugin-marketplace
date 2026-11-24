import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Options in place for repayments. If absent, the lending rate is applicable to all repayment
 * types.
 */
export const RepaymentType = {
  InterestOnly: "INTEREST_ONLY",
  PrincipalAndInterest: "PRINCIPAL_AND_INTEREST",
} as const;
export type RepaymentType = (typeof RepaymentType)[keyof typeof RepaymentType] | (string & {});

export const repaymentTypeSchema: EnumSchema<RepaymentType> = s.enumOf<RepaymentType>(RepaymentType);
