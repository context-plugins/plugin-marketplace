import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of segment.<br>`dynamic` - The segment is recalculated at set intervals.<br>`static` -
 * The segment is calculated once at creation.<br>`manual` - The segment is not calculated at all.
 * The results are created via CSV.
 */
export const SegmentType = {
  Dynamic: "dynamic",
  Static: "static",
  Manual: "manual",
  All: "all",
} as const;
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType] | (string & {});

export const segmentTypeSchema: EnumSchema<SegmentType> = s.enumOf<SegmentType>(SegmentType);
