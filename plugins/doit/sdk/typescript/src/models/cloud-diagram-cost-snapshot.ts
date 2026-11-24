import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramCostResourceSchema,
  type CloudDiagramCostResource,
} from "./cloud-diagram-cost-resource.js";
import {
  cloudDiagramCostServiceBreakdownSchema,
  type CloudDiagramCostServiceBreakdown,
} from "./cloud-diagram-cost-service-breakdown.js";
import {
  cloudDiagramCostTimeRangeSchema,
  type CloudDiagramCostTimeRange,
} from "./cloud-diagram-cost-time-range.js";
import {
  cloudDiagramCostTrendBucketSchema,
  type CloudDiagramCostTrendBucket,
} from "./cloud-diagram-cost-trend-bucket.js";

/**
 * Bounded cost snapshot for a diagram layer. Composes the diagram's total spend, period-over-period
 * change, top resources by cost (capped at 5), top services by cost (capped at 5), and the most
 * recent 12 trend buckets at the requested interval.
 */
export type CloudDiagramCostSnapshot = {
  /** Diagram (layer) ID this snapshot was computed for. */
  diagramId: string;
  /** Currency the cost numbers are reported in (e.g. `USD`). */
  currency: string;
  /** Resolved cost window for the snapshot. */
  timeRange: CloudDiagramCostTimeRange;
  /** Total cost across the entire diagram for the snapshot window. */
  total: number;
  /**
   * Period-over-period change as a fraction (e.g. 0.142 = +14.2%). `null` when no prior period of
   * equal length is available for comparison.
   */
  trendingPct: number | null;
  /** Top resources by cost, capped at 5. */
  topResources: CloudDiagramCostResource[];
  /** Top services by cost, capped at 5. */
  byService: CloudDiagramCostServiceBreakdown[];
  /** Most recent trend buckets at the requested interval, capped at 12. */
  trend: CloudDiagramCostTrendBucket[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudDiagramCostSnapshotProperties: s.Shape<CloudDiagramCostSnapshot> = {
  diagramId: s.string(),
  currency: s.string(),
  timeRange: cloudDiagramCostTimeRangeSchema,
  total: s.float64(),
  trendingPct: s.nullable(s.float64()),
  topResources: s.array(s.lazy(() => cloudDiagramCostResourceSchema)),
  byService: s.array(s.lazy(() => cloudDiagramCostServiceBreakdownSchema)),
  trend: s.array(s.lazy(() => cloudDiagramCostTrendBucketSchema)),
};

export const cloudDiagramCostSnapshotInternalSchema: Schema<CloudDiagramCostSnapshot> =
  s.object<CloudDiagramCostSnapshot>(cloudDiagramCostSnapshotProperties, { additionalProperties: s.json() });

export const cloudDiagramCostSnapshotSchema: Schema<CloudDiagramCostSnapshot> = s.lazySchema(() =>
  s.object<CloudDiagramCostSnapshot>(
    {
      ...cloudDiagramCostSnapshotProperties,
      topResources: s.array(s.lazy(() => cloudDiagramCostResourceSchema)).check(s.maxLength(5)),
      byService: s.array(s.lazy(() => cloudDiagramCostServiceBreakdownSchema)).check(s.maxLength(5)),
      trend: s.array(s.lazy(() => cloudDiagramCostTrendBucketSchema)).check(s.maxLength(12)),
    },
    { additionalProperties: s.json() },
  ),
);
