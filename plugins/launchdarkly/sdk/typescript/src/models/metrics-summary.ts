import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetricsSummary = {
  count: number;
};

export const metricsSummarySchema: Schema<MetricsSummary> = s.object<MetricsSummary>({
  count: s.int(),
});
