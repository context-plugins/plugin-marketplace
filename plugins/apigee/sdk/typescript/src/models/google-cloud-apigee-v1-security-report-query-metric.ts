import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metric of the Query */
export type GoogleCloudApigeeV1SecurityReportQueryMetric = {
  /** Aggregation function: avg, min, max, or sum. */
  aggregationFunction?: string;
  /** Alias for the metric. Alias will be used to replace metric name in query results. */
  alias?: string;
  /** Operand value should be provided when operator is set. */
  value?: string;
  /** Required. Metric name. */
  name?: string;
  /** One of `+`, `-`, `/`, `%`, `*`. */
  operator?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityReportQueryMetricSchema: Schema<GoogleCloudApigeeV1SecurityReportQueryMetric> =
  s.object<GoogleCloudApigeeV1SecurityReportQueryMetric>(
    {
      aggregationFunction: s.optional(s.string()),
      alias: s.optional(s.string()),
      value: s.optional(s.string()),
      name: s.optional(s.string()),
      operator: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
