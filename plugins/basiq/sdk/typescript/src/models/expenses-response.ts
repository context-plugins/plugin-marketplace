import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankFeesSchema, type BankFees } from "./bank-fees.js";
import { cashWithdrawalsSchema, type CashWithdrawals } from "./cash-withdrawals.js";
import { externalTransfersSchema, type ExternalTransfers } from "./external-transfers.js";
import {
  linksAffordabilityExpensesApiSchema,
  type LinksAffordabilityExpensesApi,
} from "./links-affordability-expenses-api.js";
import { loanInterestsSchema, type LoanInterests } from "./loan-interests.js";
import { loanRepaymentsSchema, type LoanRepayments } from "./loan-repayments.js";
import { paymentSchema, type Payment } from "./payment.js";

/**
 * Container object, containing expenses details.
 *
 * The Expenses object returns an aggregated list of expenses by category of spend.
 */
export type ExpensesResponse = {
  /** Value of this resource is "expenses". */
  type: string;
  /** Uniquely identifies the expenses summary. */
  id: string;
  /** Number of days covered by the summary */
  coverageDays?: number;
  /** Average monthly amount for given class for defined period */
  bankFees: BankFees;
  /** Average monthly amount for given class for defined period */
  cashWithdrawals: CashWithdrawals;
  /** Average monthly amount for given class for defined period */
  externalTransfers: ExternalTransfers;
  /** First 'month' occurrence of expenses categorised going back as far as 13 months. */
  fromMonth: string;
  /** Average monthly amount for given class for defined period */
  loanInterests: LoanInterests;
  /** Average monthly amount for given class for defined period */
  loanRepayments: LoanRepayments;
  payments: Payment[];
  /** Latest 'month' occurrence of expenses categorised. */
  toMonth: string;
  links?: LinksAffordabilityExpensesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expensesResponseSchema: Schema<ExpensesResponse> = s.object<ExpensesResponse>(
  {
    type: s.string(),
    id: s.string(),
    coverageDays: s.optional(s.int()),
    bankFees: bankFeesSchema,
    cashWithdrawals: cashWithdrawalsSchema,
    externalTransfers: externalTransfersSchema,
    fromMonth: s.string(),
    loanInterests: loanInterestsSchema,
    loanRepayments: loanRepaymentsSchema,
    payments: s.array(s.lazy(() => paymentSchema)),
    toMonth: s.string(),
    links: s.optional(s.lazy(() => linksAffordabilityExpensesApiSchema)),
  },
  { additionalProperties: s.json() },
);
