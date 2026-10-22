import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalancePrepaymentPartType = {
  Fee: "fee",
  FeeReimbursement: "fee-reimbursement",
  FeeDiscount: "fee-discount",
  FeeVat: "fee-vat",
  FeeRoundingCompensation: "fee-rounding-compensation",
} as const;
export type BalancePrepaymentPartType =
  | (typeof BalancePrepaymentPartType)[keyof typeof BalancePrepaymentPartType]
  | (string & {});

export const balancePrepaymentPartTypeSchema: EnumSchema<BalancePrepaymentPartType> =
  s.enumOf<BalancePrepaymentPartType>(BalancePrepaymentPartType);
