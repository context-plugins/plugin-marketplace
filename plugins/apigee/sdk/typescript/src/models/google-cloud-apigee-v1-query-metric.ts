import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * More info about Metric:
 * https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics
 */
export type GoogleCloudApigeeV1QueryMetric = {
  /** Alias for the metric. Alias will be used to replace metric name in query results. */
  alias?: string;
  /** Operand value should be provided when operator is set. */
  value?: string;
  /** Required. Metric name. */
  name?: string;
  /** Aggregation function: avg, min, max, or sum. */
  function?: string;
  /** One of `+`, `-`, `/`, `%`, `*`. */
  operator?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryMetricSchema: Schema<GoogleCloudApigeeV1QueryMetric> =
  s.object<GoogleCloudApigeeV1QueryMetric>(
    {
      alias: s.optional(s.string()),
      value: s.optional(s.string()),
      name: s.optional(s.string()),
      function: s.optional(s.string()),
      operator: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
