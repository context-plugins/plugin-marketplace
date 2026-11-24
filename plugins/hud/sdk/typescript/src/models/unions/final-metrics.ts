import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifFinalMetricsInternalSchema,
  atifFinalMetricsSchema,
  type AtifFinalMetrics,
} from "../atif-final-metrics.js";

export type FinalMetrics = AtifFinalMetrics;

export const finalMetricsInternalSchema: Schema<FinalMetrics> = s.of<FinalMetrics>(
  s.union([s.lazy(() => atifFinalMetricsInternalSchema)]),
);

export const finalMetricsSchema: Schema<FinalMetrics> = s.lazySchema(() =>
  s.of<FinalMetrics>(s.union([s.lazy(() => atifFinalMetricsSchema)])),
);
