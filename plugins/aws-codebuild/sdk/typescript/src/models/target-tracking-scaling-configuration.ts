import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricTypeSchema, type MetricType } from "./metric-type.js";

export type TargetTrackingScalingConfiguration = {
  /** The metric type to determine auto-scaling. */
  metricType?: MetricType;
  /** The value of metricType when to start scaling. */
  targetValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const targetTrackingScalingConfigurationSchema: Schema<TargetTrackingScalingConfiguration> =
  s.object<TargetTrackingScalingConfiguration>(
    {
      metricType: s.optional(s.lazy(() => metricTypeSchema)),
      targetValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
