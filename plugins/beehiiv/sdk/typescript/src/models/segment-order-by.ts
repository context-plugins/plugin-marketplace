import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentOrderBy = {
  Created: "created",
  LastCalculated: "last_calculated",
} as const;
export type SegmentOrderBy = (typeof SegmentOrderBy)[keyof typeof SegmentOrderBy] | (string & {});

export const segmentOrderBySchema: EnumSchema<SegmentOrderBy> = s.enumOf<SegmentOrderBy>(SegmentOrderBy);
