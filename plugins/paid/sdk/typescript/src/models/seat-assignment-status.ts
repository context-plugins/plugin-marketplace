import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SeatAssignmentStatus = {
  Assigned: "assigned",
  Unassigned: "unassigned",
} as const;
export type SeatAssignmentStatus =
  | (typeof SeatAssignmentStatus)[keyof typeof SeatAssignmentStatus]
  | (string & {});

export const seatAssignmentStatusSchema: EnumSchema<SeatAssignmentStatus> =
  s.enumOf<SeatAssignmentStatus>(SeatAssignmentStatus);
