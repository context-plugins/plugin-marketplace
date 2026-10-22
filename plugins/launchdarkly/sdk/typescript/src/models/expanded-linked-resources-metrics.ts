import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedMetricSchema, type ExpandedMetric } from "./expanded-metric.js";

export type ExpandedLinkedResourcesMetrics = {
  items: ExpandedMetric[];
  totalCount: number;
};

export const expandedLinkedResourcesMetricsSchema: Schema<ExpandedLinkedResourcesMetrics> =
  s.object<ExpandedLinkedResourcesMetrics>({
    items: s.array(s.lazy(() => expandedMetricSchema)),
    totalCount: s.int(),
  });
