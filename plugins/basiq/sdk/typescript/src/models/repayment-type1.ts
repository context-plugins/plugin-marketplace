import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST. */
export const RepaymentType1 = {
  InterestOnly: "INTEREST_ONLY",
  PrincipalAndInterest: "PRINCIPAL_AND_INTEREST",
} as const;
export type RepaymentType1 = (typeof RepaymentType1)[keyof typeof RepaymentType1] | (string & {});

export const repaymentType1Schema: EnumSchema<RepaymentType1> = s.enumOf<RepaymentType1>(RepaymentType1);
