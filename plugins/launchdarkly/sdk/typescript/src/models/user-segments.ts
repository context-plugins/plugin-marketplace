import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { userSegmentSchema, type UserSegment } from "./user-segment.js";

export type UserSegments = {
  /** An array of segments */
  items: UserSegment[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The total number of segments */
  totalCount?: number;
};

export const userSegmentsSchema: Schema<UserSegments> = s.object<UserSegments>({
  items: s.array(s.lazy(() => userSegmentSchema)),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
