import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interestPaymentDueSchema, type InterestPaymentDue } from "./interest-payment-due.js";
import { lendingRateTypeSchema, type LendingRateType } from "./lending-rate-type.js";
import { loanPurposeSchema, type LoanPurpose } from "./loan-purpose.js";
import { repaymentTypeSchema, type RepaymentType } from "./repayment-type.js";
import { tierSchema, type Tier } from "./tier.js";

export type LendingRate = {
  /** The type of rate (fixed, variable, etc). */
  lendingRateType: LendingRateType;
  /** The rate to be applied. */
  rate: string;
  /** A comparison rate equivalent for this rate. */
  comparisonRate?: string;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the
   * period. Calculation of the amount is often daily (as balances may change) but accumulated until
   * the total amount is 'applied' to the account (see applicationFrequency). Formatted according to
   * ISO 8601 Durations (excludes recurrence syntax).
   */
  calculationFrequency?: string;
  /**
   * The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e.
   * debited or credited) to the account. Formatted according to ISO 8601 Durations (excludes
   * recurrence syntax).
   */
  applicationFrequency?: string;
  /**
   * When loan payments are due to be paid within each period. The investment benefit of earlier
   * payments affect the rate that can be offered.
   */
  interestPaymentDue?: InterestPaymentDue;
  /**
   * Options in place for repayments. If absent, the lending rate is applicable to all repayment
   * types.
   */
  repaymentType?: RepaymentType;
  /**
   * The reason for taking out the loan. If absent, the lending rate is applicable to all loan
   * purposes.
   */
  loanPurpose?: LoanPurpose;
  tiers?: Tier[] | null;
  /**
   * Generic field containing additional information relevant to the depositRateType specified.
   * Whether mandatory or not is dependent on the value of depositRateType.
   */
  additionalValue?: string;
  /** Display text providing more information on the rate. */
  additionalInfo?: string;
  /** Link to a web page with more information on this rate. */
  additionalInfoUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lendingRateSchema: Schema<LendingRate> = s.object<LendingRate>(
  {
    lendingRateType: lendingRateTypeSchema,
    rate: s.string(),
    comparisonRate: s.optional(s.string()),
    calculationFrequency: s.optional(s.string()),
    applicationFrequency: s.optional(s.string()),
    interestPaymentDue: s.optional(s.lazy(() => interestPaymentDueSchema)),
    repaymentType: s.optional(s.lazy(() => repaymentTypeSchema)),
    loanPurpose: s.optional(s.lazy(() => loanPurposeSchema)),
    tiers: s.optionalNullable(s.array(s.lazy(() => tierSchema))),
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
