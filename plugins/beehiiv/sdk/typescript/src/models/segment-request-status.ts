import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SegmentRequestStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  All: "all",
} as const;
export type SegmentRequestStatus =
  | (typeof SegmentRequestStatus)[keyof typeof SegmentRequestStatus]
  | (string & {});

export const segmentRequestStatusSchema: EnumSchema<SegmentRequestStatus> =
  s.enumOf<SegmentRequestStatus>(SegmentRequestStatus);
