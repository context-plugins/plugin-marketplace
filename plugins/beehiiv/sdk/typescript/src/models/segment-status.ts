import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the segment's most recent calculation.<br>`pending` - The segment has not been
 * calculated yet.<br>`processing` - The calculation is in progress, and has not
 * completed.<br>`completed` - The calculation was successful.<br>`failed` - Something went wrong
 * during the calculation.
 */
export const SegmentStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type SegmentStatus = (typeof SegmentStatus)[keyof typeof SegmentStatus] | (string & {});

export const segmentStatusSchema: EnumSchema<SegmentStatus> = s.enumOf<SegmentStatus>(SegmentStatus);
