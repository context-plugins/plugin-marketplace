import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * Estimated monthly additional savings per Savings Plan (SP) type, taken from the latest
 * PerfectScale for Commitments purchase projection. Unlike `savingsTotals` (realized YTD/lifetime
 * savings), this is a forward-looking estimate of the monthly savings achievable if the recommended
 * commitments are purchased. For member accounts, the AWS organization figure is attributed by each
 * member account's share of trailing-60-day SP-eligible on-demand cost. A per-SP-type value of
 * `0.00` means the latest projection is missing, expired, or empty. The field is omitted entirely
 * only for accounts that have never had potential savings computed.
 */
export type AwsMonthlyPotentialSavings = {
  compute?: Money;
  database?: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsMonthlyPotentialSavingsProperties: s.Shape<AwsMonthlyPotentialSavings> = {
  compute: s.optional(s.lazy(() => moneyInternalSchema)),
  database: s.optional(s.lazy(() => moneyInternalSchema)),
};

export const awsMonthlyPotentialSavingsInternalSchema: Schema<AwsMonthlyPotentialSavings> =
  s.object<AwsMonthlyPotentialSavings>(awsMonthlyPotentialSavingsProperties, {
    additionalProperties: s.json(),
  });

export const awsMonthlyPotentialSavingsSchema: Schema<AwsMonthlyPotentialSavings> = s.lazySchema(() =>
  s.object<AwsMonthlyPotentialSavings>(
    {
      ...awsMonthlyPotentialSavingsProperties,
      compute: s.optional(s.lazy(() => moneySchema)),
      database: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
