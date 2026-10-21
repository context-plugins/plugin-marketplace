import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type QueueBackpressureMetricThreshold = number;

export const queueBackpressureMetricThresholdSchema: Schema<QueueBackpressureMetricThreshold> =
  s.of<QueueBackpressureMetricThreshold>(s.union([s.float64()]));
