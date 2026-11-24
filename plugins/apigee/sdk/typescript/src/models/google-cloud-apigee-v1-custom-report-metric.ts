import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * This encapsulates a metric property of the form sum(message_count) where name is message_count
 * and function is sum
 */
export type GoogleCloudApigeeV1CustomReportMetric = {
  /** aggregate function */
  function?: string;
  /** name of the metric */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CustomReportMetricSchema: Schema<GoogleCloudApigeeV1CustomReportMetric> =
  s.object<GoogleCloudApigeeV1CustomReportMetric>(
    {
      function: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
