import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type associated with the status update. This represents the current state of the object this
 * object is on.
 */
export const StatusType = {
  OnTrack: "on_track",
  AtRisk: "at_risk",
  OffTrack: "off_track",
  OnHold: "on_hold",
  Complete: "complete",
  Achieved: "achieved",
  Partial: "partial",
  Missed: "missed",
  Dropped: "dropped",
} as const;
export type StatusType = (typeof StatusType)[keyof typeof StatusType] | (string & {});

export const statusTypeSchema: EnumSchema<StatusType> = s.enumOf<StatusType>(StatusType);
