import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetricDoiTDataHubApi = {
  /** The value of the metric. */
  value?: number;
  /**
   * The type of the metric. If you choose "cost" or "usage", it will map to the basic "Cost" or
   * "Usage" metric in Cloud Analytics reports. You can also use this field to define custom metric
   * types, such as "working_hours", "ride", etc.
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricDoiTDataHubApiSchema: Schema<MetricDoiTDataHubApi> = s.object<MetricDoiTDataHubApi>(
  {
    value: s.optional(s.float64()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
