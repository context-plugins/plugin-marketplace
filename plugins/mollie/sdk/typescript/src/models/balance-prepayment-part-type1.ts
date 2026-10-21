import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation. */
export const BalancePrepaymentPartType1 = {
  Fee: "fee",
  FeeReimbursement: "fee-reimbursement",
  FeeDiscount: "fee-discount",
  FeeVat: "fee-vat",
  FeeRoundingCompensation: "fee-rounding-compensation",
} as const;
export type BalancePrepaymentPartType1 =
  | (typeof BalancePrepaymentPartType1)[keyof typeof BalancePrepaymentPartType1]
  | (string & {});

export const balancePrepaymentPartType1Schema: EnumSchema<BalancePrepaymentPartType1> =
  s.enumOf<BalancePrepaymentPartType1>(BalancePrepaymentPartType1);
