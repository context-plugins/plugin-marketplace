import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single period within a commitment. */
export type CommitmentPeriod = {
  /** The start date of the period. */
  startDate?: Date;
  /** The end date of the period. */
  endDate?: Date;
  /** The commitment value for this period. */
  commitmentValue?: number;
  /** The marketplace limit as a percentage (0-100). */
  marketplaceLimitPercentage?: number;
  /** The marketplace spend within this period. */
  marketplaceSpend?: number;
  /**
   * The marketplace limit in absolute currency for this period, derived as commitmentValue *
   * marketplaceLimitPercentage / 100.
   */
  marketplaceLimitAmount?: number;
  /**
   * The projected spend at the end of this period, based on a linear regression over the period's
   * total spend series. 0 when insufficient history is available to compute a forecast.
   */
  forecastValue?: number;
  /**
   * This period's own attained spend, on a cash basis. This is eligible spend (including capped
   * marketplace spend and credits) plus adjustments, excluding anything carried in from the
   * previous period. Summed across periods it equals `totalCurrentAttainment`. To measure the
   * period against its `commitmentValue` the way the console does, use `cashAttainment +
   * rolloverFromPrevPeriod + shortfallRollover`; the period's remaining amount is `commitmentValue`
   * minus that. Excess carried out to the next period is not deducted from this period.
   */
  cashAttainment?: number;
  /**
   * The amount carried into this period from the previous period under the commitment's rollover
   * terms. Positive for excess rollover, negative for shortfall rollover, 0 when nothing was
   * carried (always 0 for the first period). amazon-web-services commitments no longer roll over,
   * so this is 0 for them unless the commitment was last calculated before that change. Not
   * included in `cashAttainment` or `totalCurrentAttainment`.
   */
  rolloverFromPrevPeriod?: number;
  /**
   * The part of this period's shortfall carried forward to the next period under the commitment's
   * shortfall rollover terms, where it appears as a negative `rolloverFromPrevPeriod`. 0 when
   * nothing was carried forward, including while the period is still open and for the last period.
   * The console counts this amount as met within this period. Not included in `cashAttainment` or
   * `totalCurrentAttainment`.
   */
  shortfallRollover?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commitmentPeriodSchema: Schema<CommitmentPeriod> = s.object<CommitmentPeriod>(
  {
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    commitmentValue: s.optional(s.float64()),
    marketplaceLimitPercentage: s.optional(s.float64()),
    marketplaceSpend: s.optional(s.float64()),
    marketplaceLimitAmount: s.optional(s.float64()),
    forecastValue: s.optional(s.float64()),
    cashAttainment: s.optional(s.float64()),
    rolloverFromPrevPeriod: s.optional(s.float64()),
    shortfallRollover: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
