import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusCodeSchema, type StatusCode } from "./status-code.js";
import {
  timestampMetricValuePairSchema,
  type TimestampMetricValuePair,
} from "./timestamp-metric-value-pair.js";

export type CloudWatchMetricsDataSummary = {
  /** This is a list of Amazon CloudWatch metric values at given timestamp. */
  timestampMetricValuePairList?: TimestampMetricValuePair[];
  /**
   * This is an enum of the status showing whether the metric value pair list has partial or
   * complete data, or if there was an error.
   */
  statusCode?: StatusCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchMetricsDataSummarySchema: Schema<CloudWatchMetricsDataSummary> =
  s.object<CloudWatchMetricsDataSummary>(
    {
      timestampMetricValuePairList: s.optional(s.array(s.lazy(() => timestampMetricValuePairSchema))),
      statusCode: s.optional(s.lazy(() => statusCodeSchema)),
      _keysMap: {
        timestampMetricValuePairList: "TimestampMetricValuePairList",
        statusCode: "StatusCode",
      },
    },
    { additionalProperties: s.json() },
  );
