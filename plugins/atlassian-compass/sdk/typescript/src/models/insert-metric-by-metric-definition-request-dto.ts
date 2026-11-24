import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsertMetricByMetricDefinitionRequestDto = {
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
  /** The metric definition ID corresponding to the metric source to send the value into. */
  metricDefinitionId: string;
  /** The component ID corresponding to the metric source to send the value into. */
  componentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insertMetricByMetricDefinitionRequestDtoSchema: Schema<InsertMetricByMetricDefinitionRequestDto> =
  s.object<InsertMetricByMetricDefinitionRequestDto>(
    {
      title: s.optional(s.string()),
      value: s.float64(),
      annotation: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
      url: s.optional(s.string()),
      metricDefinitionId: s.string(),
      componentId: s.string(),
    },
    { additionalProperties: s.json() },
  );
