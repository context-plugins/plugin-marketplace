import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LoanpaymentcalculatorRequest = {
  /** The loan amount */
  loanAmount: number;
  /** The interest rate (percentage) */
  interestRate: number;
  /** The loan term in years */
  loanTerm: number;
  /** Amount paid up front, subtracted from the loan amount before interest is applied */
  downpayment?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LoanpaymentcalculatorRequestSchema: Schema<V1LoanpaymentcalculatorRequest> =
  s.object<V1LoanpaymentcalculatorRequest>(
    {
      loanAmount: s.float64(),
      interestRate: s.float64(),
      loanTerm: s.int(),
      downpayment: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
