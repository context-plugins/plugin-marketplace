import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedSegmentSchema, type ExpandedSegment } from "./expanded-segment.js";

/** Details on linked segments for a view - requires passing the 'allSegments' expand field */
export type ExpandedLinkedSegments = {
  items: ExpandedSegment[];
  totalCount: number;
};

export const expandedLinkedSegmentsSchema: Schema<ExpandedLinkedSegments> = s.object<ExpandedLinkedSegments>({
  items: s.array(s.lazy(() => expandedSegmentSchema)),
  totalCount: s.int(),
});
