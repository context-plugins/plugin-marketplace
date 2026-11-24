import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { depositRateTypeSchema, type DepositRateType } from "./deposit-rate-type.js";
import { tierSchema, type Tier } from "./tier.js";

export type DepositRate = {
  /** The type of rate (base, bonus, etc). */
  depositRateType: DepositRateType;
  /** The rate to be applied. */
  rate: string;
  /**
   * The period after which the rate is applied to the balance to calculate the amount due for the
   * period. Calculation of the amount is often daily (as balances may change) but accumulated until
   * the total amount is 'applied' to the account (see applicationFrequency). Formatted according to
   * ISO 8601 Durations (excludes recurrence syntax).
   */
  calculationFrequency?: string;
  /**
   * The period after which the calculated amount(s) are 'applied' (i.e. debited or credited) to the
   * account.
   */
  applicationFrequency?: string;
  tiers?: Tier[] | null;
  /**
   * Generic field containing additional information relevant to the lendingRateType specified.
   * Whether mandatory or not is dependent on the value of lendingRateType.
   */
  additionalValue?: string;
  /** Display text providing more information on the rate. */
  additionalInfo?: string;
  /** Link to a web page with more information on this rate. */
  additionalInfoUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const depositRateSchema: Schema<DepositRate> = s.object<DepositRate>(
  {
    depositRateType: depositRateTypeSchema,
    rate: s.string(),
    calculationFrequency: s.optional(s.string()),
    applicationFrequency: s.optional(s.string()),
    tiers: s.optionalNullable(s.array(s.lazy(() => tierSchema))),
    additionalValue: s.optional(s.string()),
    additionalInfo: s.optional(s.string()),
    additionalInfoUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
