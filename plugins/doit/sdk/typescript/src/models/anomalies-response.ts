import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalyItemSchema, type AnomalyItem } from "./anomaly-item.js";
import { anomalySummarySchema, type AnomalySummary } from "./anomaly-summary.js";

/** List of detected cloud cost anomalies. */
export type AnomaliesResponse = {
  /** Anomalies in this page. Always an array; empty (`[]`) when there are no matching anomalies. */
  anomalies: AnomalyItem[];
  /** Opaque token for the next page. Omitted when there is no next page. */
  pageToken?: string;
  /**
   * Number of items in this page (`anomalies.length`). This is not the total count across all
   * pages; the total across the full filtered result set is `totalCount`.
   */
  rowCount: number;
  /**
   * `true` when filtered anomalies remain beyond this page. Derived from the same "rows remain
   * after the last returned row" check as `pageToken`, so the two are never contradictory:
   * `pageToken` is present if and only if `truncated` is `true`.
   */
  truncated: boolean;
  /**
   * Total number of anomalies matching the filters and time window, across all pages. This is a
   * per-request snapshot: under concurrent writes, the value can differ between pages fetched
   * during the same pagination sequence.
   */
  totalCount: number;
  /**
   * Whether `totalCount` is exact. Always `true` for this operation, because `totalCount` is
   * computed over the fully materialised filtered result set.
   */
  totalCountExact: boolean;
  /**
   * Anomaly-specific summary. `countBySeverity` and `totalCostOfAnomaly` cover the complete
   * filtered result set across all pages, not the returned page. Anomalies whose severity cannot be
   * determined (legacy documents) are counted in `totalCount` and `totalCostOfAnomaly` but in none
   * of the three severity buckets in `countBySeverity`, so the three values can sum to less than
   * `totalCount`. Computed as of this request; under concurrent writes, values may differ between
   * pages fetched during the same pagination sequence.
   */
  anomalySummary: AnomalySummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomaliesResponseSchema: Schema<AnomaliesResponse> = s.object<AnomaliesResponse>(
  {
    anomalies: s.array(s.lazy(() => anomalyItemSchema)),
    pageToken: s.optional(s.string()),
    rowCount: s.int(),
    truncated: s.boolean(),
    totalCount: s.int(),
    totalCountExact: s.boolean(),
    anomalySummary: anomalySummarySchema,
  },
  { additionalProperties: s.json() },
);
