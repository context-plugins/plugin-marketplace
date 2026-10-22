import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  queueBackpressureMetricKindSchema,
  type QueueBackpressureMetricKind,
} from "../queue-backpressure-metric-kind.js";

export type QueueBackpressureMetricKind1 = QueueBackpressureMetricKind;

export const queueBackpressureMetricKind1Schema: Schema<QueueBackpressureMetricKind1> =
  s.of<QueueBackpressureMetricKind1>(s.union([s.lazy(() => queueBackpressureMetricKindSchema)]));
