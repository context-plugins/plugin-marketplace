import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedDirectlyLinkedSegmentsSchema,
  type ExpandedDirectlyLinkedSegments,
} from "./expanded-directly-linked-segments.js";

export type SegmentsSummary = {
  count: number;
  linkedSegments?: ExpandedDirectlyLinkedSegments;
};

export const segmentsSummarySchema: Schema<SegmentsSummary> = s.object<SegmentsSummary>({
  count: s.int(),
  linkedSegments: s.optional(s.lazy(() => expandedDirectlyLinkedSegmentsSchema)),
});
