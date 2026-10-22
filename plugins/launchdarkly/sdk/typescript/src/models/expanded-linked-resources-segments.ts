import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedSegmentSchema, type ExpandedSegment } from "./expanded-segment.js";

export type ExpandedLinkedResourcesSegments = {
  items: ExpandedSegment[];
  totalCount: number;
};

export const expandedLinkedResourcesSegmentsSchema: Schema<ExpandedLinkedResourcesSegments> =
  s.object<ExpandedLinkedResourcesSegments>({
    items: s.array(s.lazy(() => expandedSegmentSchema)),
    totalCount: s.int(),
  });
