import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedDirectlyLinkedSegmentSchema,
  type ExpandedDirectlyLinkedSegment,
} from "./expanded-directly-linked-segment.js";

export type ExpandedDirectlyLinkedSegments = {
  items: ExpandedDirectlyLinkedSegment[];
  totalCount: number;
};

export const expandedDirectlyLinkedSegmentsSchema: Schema<ExpandedDirectlyLinkedSegments> =
  s.object<ExpandedDirectlyLinkedSegments>({
    items: s.array(s.lazy(() => expandedDirectlyLinkedSegmentSchema)),
    totalCount: s.int(),
  });
