import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The metric value that was sent into the metric source. */
export type InsertMetricResponseDtoError = {
  /** The ID of the metric source. */
  metricSourceId: string;
  /** The value of the metric. */
  value: number;
  /** The time the metric value was collected. */
  timestamp: Date;
  /** The metric value annotation. */
  annotation?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insertMetricResponseDtoErrorSchema: Schema<InsertMetricResponseDtoError> =
  s.object<InsertMetricResponseDtoError>(
    {
      metricSourceId: s.string(),
      value: s.float64(),
      timestamp: s.dateTime(),
      annotation: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
