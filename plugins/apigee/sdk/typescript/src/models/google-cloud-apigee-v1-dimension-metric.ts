import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1MetricSchema,
  type GoogleCloudApigeeV1Metric,
} from "./google-cloud-apigee-v1-metric.js";

/** Encapsulates a metric grouped by dimension. */
export type GoogleCloudApigeeV1DimensionMetric = {
  /**
   * Comma joined dimension names. E.g. "dim1_name,dim2_name". Deprecated. If name already has comma
   * before join, we may get wrong splits. Please use individual_names.
   *
   * @deprecated
   */
  name?: string;
  /** Individual dimension names. E.g. ["dim1_name", "dim2_name"]. */
  individualNames?: string[];
  /** List of metrics. */
  metrics?: GoogleCloudApigeeV1Metric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DimensionMetricSchema: Schema<GoogleCloudApigeeV1DimensionMetric> =
  s.object<GoogleCloudApigeeV1DimensionMetric>(
    {
      name: s.optional(s.string()),
      individualNames: s.optional(s.array(s.string())),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1MetricSchema))),
    },
    { additionalProperties: s.json() },
  );
