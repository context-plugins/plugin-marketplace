import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricSchema, type Metric } from "./metric.js";

/** Optional. The config for metrics. */
export type DataprocMetricConfig2 = {
  /** Required. Metrics sources to enable. */
  metrics?: Metric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataprocMetricConfig2Schema: Schema<DataprocMetricConfig2> = s.object<DataprocMetricConfig2>(
  {
    metrics: s.optional(s.array(s.lazy(() => metricSchema))),
  },
  { additionalProperties: s.json() },
);
