import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { changeTypeSchema, type ChangeType } from "./change-type.js";
import { externalMetricSchema, type ExternalMetric } from "./external-metric.js";
import { operator1Schema, type Operator1 } from "./operator1.js";

/**
 * Limit by change filter; a report may configure at most two of `metricFilter`, `limitByChange` and
 * rank `group` limits. Without `secondaryTimeRange` the change is a period-over-period delta
 * between adjacent time buckets. With it, each row's primary-range total is compared with its
 * secondary-range total, so column dimensions (`dimensions`, which `timeInterval` fills implicitly
 * when omitted) only add buckets to those totals, while `group` gives every row its own change. A
 * percentage change is comparable while both periods hold the same number of buckets; an absolute
 * change is their plain difference and so scales with the bucket count. A row present in only one
 * range counts as zero there, so a percentage threshold cannot be met from zero. A percentage-typed
 * custom metric, or count aggregation, is rejected with
 * `LIMIT_BY_CHANGE_METRIC_NOT_ADDITIVE_WITH_SECONDARY`. On PATCH, omit to preserve the existing
 * limit; send null to remove it.
 */
export type ExternalLimitByChange = {
  /**
   * The metric the change is measured on. It must also be listed in the report's `config.metrics`;
   * otherwise the request is rejected with a 400 and nothing is saved.
   */
  metric: ExternalMetric;
  changeType: ChangeType;
  /**
   * Comparison operator for period-over-period deltas: `gt` (Greater Than), `gte` (Greater Than or
   * Equals), `lt` (Less Than), `lte` (Less Than or Equals), `b` (Between), `nb` (Not Between).
   */
  operator: Operator1;
  /**
   * Threshold value(s). Unary operators (`gt`, `gte`, `lt`, `lte`) use one entry; the range
   * operators (`b`, `nb`) require two ordered entries.
   */
  values: number[];
  /** When true, keeps rows whose deltas could not be evaluated. */
  includeIncompleteData: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalLimitByChangeSchema: Schema<ExternalLimitByChange> = s.object<ExternalLimitByChange>(
  {
    metric: externalMetricSchema,
    changeType: changeTypeSchema,
    operator: operator1Schema,
    values: s.array(s.float64()),
    includeIncompleteData: s.boolean(),
  },
  { additionalProperties: s.json() },
);
