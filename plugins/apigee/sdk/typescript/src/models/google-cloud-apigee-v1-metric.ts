import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [
 * { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" }
 * ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }```
 */
export type GoogleCloudApigeeV1Metric = {
  /**
   * List of metric values. Possible value formats include: `"values":["39.0"]` or `"values":[ {
   * "value": "39.0", "timestamp": 1232434354} ]`
   */
  values?: Record<string, unknown>[];
  /** Metric name. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MetricSchema: Schema<GoogleCloudApigeeV1Metric> =
  s.object<GoogleCloudApigeeV1Metric>(
    {
      values: s.optional(s.array(s.record(s.string(), s.unknown()))),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
