import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Define how metrics are selected and filtered in reports. */
export type MetricConfig = {
  /** Identifier for metric type (e.g., basic, custom, extended). */
  type: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricConfigSchema: Schema<MetricConfig> = s.object<MetricConfig>(
  {
    type: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
