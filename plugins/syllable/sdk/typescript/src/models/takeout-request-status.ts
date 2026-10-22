import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of a takeout request. */
export const TakeoutRequestStatus = {
  Pending: "pending",
  InProgress: "in_progress",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type TakeoutRequestStatus =
  | (typeof TakeoutRequestStatus)[keyof typeof TakeoutRequestStatus]
  | (string & {});

export const takeoutRequestStatusSchema: EnumSchema<TakeoutRequestStatus> =
  s.enumOf<TakeoutRequestStatus>(TakeoutRequestStatus);
