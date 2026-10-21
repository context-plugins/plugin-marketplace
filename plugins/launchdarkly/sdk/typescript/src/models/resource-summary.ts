import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceSummary = {
  flagCount: number;
  segmentCount?: number;
  metricCount?: number;
  aiConfigCount?: number;
  totalCount: number;
};

export const resourceSummarySchema: Schema<ResourceSummary> = s.object<ResourceSummary>({
  flagCount: s.int(),
  segmentCount: s.optional(s.int()),
  metricCount: s.optional(s.int()),
  aiConfigCount: s.optional(s.int()),
  totalCount: s.int(),
});
