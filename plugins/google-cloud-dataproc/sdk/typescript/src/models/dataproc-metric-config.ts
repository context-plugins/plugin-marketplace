import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricSchema, type Metric } from "./metric.js";

/** Metric config. */
export type DataprocMetricConfig = {
  /** Required. Metrics sources to enable. */
  metrics?: Metric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataprocMetricConfigSchema: Schema<DataprocMetricConfig> = s.object<DataprocMetricConfig>(
  {
    metrics: s.optional(s.array(s.lazy(() => metricSchema))),
  },
  { additionalProperties: s.json() },
);
