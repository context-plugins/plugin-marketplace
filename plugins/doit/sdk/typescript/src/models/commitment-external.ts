import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudProviderSchema, type CloudProvider } from "./cloud-provider.js";
import { commitmentPeriodSchema, type CommitmentPeriod } from "./commitment-period.js";

/** A commitment contract. */
export type CommitmentExternal = {
  /** The unique identifier of the commitment. */
  id?: string;
  /** The name of the commitment. */
  name?: string;
  /** The start date of the commitment. */
  startDate?: Date;
  /** The end date of the commitment. */
  endDate?: Date;
  /** The currency of the commitment (e.g., USD). */
  currency?: string;
  /** The cloud provider associated with the commitment. */
  cloudProvider?: CloudProvider;
  /** The total value of the commitment across all periods. */
  totalCommitmentValue?: number;
  /**
   * The total attained spend across all periods, on a cash basis. This is eligible spend (including
   * capped marketplace spend and credits) plus adjustments. Rollover between periods is excluded,
   * so excess or shortfall carried into a later period is not counted again; each period's carried
   * amount is reported separately in `periods[].rolloverFromPrevPeriod`. Equals the sum of
   * `periods[].cashAttainment`.
   */
  totalCurrentAttainment?: number;
  /** The total marketplace spend across all periods. */
  totalMarketplaceSpend?: number;
  /**
   * The total projected spend at the end of the commitment, summed across all periods. 0 when
   * insufficient history is available to compute a forecast.
   */
  totalForecastValue?: number;
  /** The list of commitment periods. */
  periods?: CommitmentPeriod[];
  /** The creation time in milliseconds since epoch. */
  createTime?: number;
  /** The last update time in milliseconds since epoch. */
  updateTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commitmentExternalSchema: Schema<CommitmentExternal> = s.object<CommitmentExternal>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    currency: s.optional(s.string()),
    cloudProvider: s.optional(s.lazy(() => cloudProviderSchema)),
    totalCommitmentValue: s.optional(s.float64()),
    totalCurrentAttainment: s.optional(s.float64()),
    totalMarketplaceSpend: s.optional(s.float64()),
    totalForecastValue: s.optional(s.float64()),
    periods: s.optional(s.array(s.lazy(() => commitmentPeriodSchema))),
    createTime: s.optional(s.int()),
    updateTime: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
