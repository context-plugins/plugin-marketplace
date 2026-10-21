import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedMetricSchema, type ExpandedMetric } from "./expanded-metric.js";

export type ExpandedLinkedMetrics = {
  items: ExpandedMetric[];
  totalCount: number;
};

export const expandedLinkedMetricsSchema: Schema<ExpandedLinkedMetrics> = s.object<ExpandedLinkedMetrics>({
  items: s.array(s.lazy(() => expandedMetricSchema)),
  totalCount: s.int(),
});
