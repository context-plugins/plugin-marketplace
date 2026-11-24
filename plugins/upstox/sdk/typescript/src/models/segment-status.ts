import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type SegmentStatus = (typeof SegmentStatus)[keyof typeof SegmentStatus] | (string & {});

export const segmentStatusSchema: EnumSchema<SegmentStatus> = s.enumOf<SegmentStatus>(SegmentStatus);
