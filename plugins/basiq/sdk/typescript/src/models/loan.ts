import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repaymentType1Schema, type RepaymentType1 } from "./repayment-type1.js";

export type Loan = {
  /** Start date for the loan. */
  startDate?: string;
  /** Date that the loan is due to be repaid in full. */
  endDate?: string;
  /** Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST. */
  repaymentType?: RepaymentType1;
  /** Optional loan value. */
  originalLoanAmount?: string;
  /** If absent assumes AUD. */
  originalLoanCurrency?: string;
  /** Minimum amount of next instalment. */
  minInstalmentAmount?: string;
  /** Next date that an instalment is required. */
  nextInstalmentDate?: string;
  /** If absent assumes AUD. */
  minInstalmentCurrency?: string;
  /**
   * Maximum amount of funds that can be redrawn. If not present, redraw is not available even if
   * the feature exists for the account.
   */
  maxRedraw?: string;
  /** If absent assumes AUD. */
  maxRedrawCurrency?: string;
  /** Minimum redraw amount. */
  minRedraw?: string;
  /** If absent assumes AUD. */
  minRedrawCurrency?: string;
  /**
   * The expected or required repayment frequency. Formatted according to ISO 8601 Durations
   * (excludes recurrence syntax).
   */
  repaymentFrequency?: string;
  /**
   * The accountIDs of the configured offset accounts attached to this loan. Only offset accounts
   * that can be accessed under the current authorisation should be included. It is expected
   * behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or
   * empty. This represents a situation where an offset account exists but details can not be
   * accessed under the current authorisation.
   */
  offsetAccountIds?: string[];
  /** Set to true if one or more offset accounts are configured for this loan account. */
  offsetAccountEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loanSchema: Schema<Loan> = s.object<Loan>(
  {
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    repaymentType: s.optional(s.lazy(() => repaymentType1Schema)),
    originalLoanAmount: s.optional(s.string()),
    originalLoanCurrency: s.optional(s.string()),
    minInstalmentAmount: s.optional(s.string()),
    nextInstalmentDate: s.optional(s.string()),
    minInstalmentCurrency: s.optional(s.string()),
    maxRedraw: s.optional(s.string()),
    maxRedrawCurrency: s.optional(s.string()),
    minRedraw: s.optional(s.string()),
    minRedrawCurrency: s.optional(s.string()),
    repaymentFrequency: s.optional(s.string()),
    offsetAccountIds: s.optional(s.array(s.string())),
    offsetAccountEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
