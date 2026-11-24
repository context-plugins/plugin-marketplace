import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsertMetricByMetricSourceRequestDto = {
  /**
   * The title of the metric value source. The title of the metric source being inserted into will
   * be updated to match this value.If this property is not provided, the existing value on the
   * metric source will not be updated.
   */
  title?: string;
  /** The metric value to send. */
  value: number;
  /** The ADF annotation attached to a metric value. */
  annotation?: string;
  /** The time the metric value was collected. */
  timestamp?: Date;
  /**
   * The url of the metric value source. The url of the metric source being inserted into will be
   * updated to match this value. If this property is not provided, the existing value on the metric
   * source will not be updated.
   */
  url?: string;
  /** The ID of the metric source to send the value into. */
  metricSourceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insertMetricByMetricSourceRequestDtoSchema: Schema<InsertMetricByMetricSourceRequestDto> =
  s.object<InsertMetricByMetricSourceRequestDto>(
    {
      title: s.optional(s.string()),
      value: s.float64(),
      annotation: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
      url: s.optional(s.string()),
      metricSourceId: s.string(),
    },
    { additionalProperties: s.json() },
  );
