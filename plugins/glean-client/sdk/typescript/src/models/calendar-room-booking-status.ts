import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current booking status of the room resource associated with an event. */
export const CalendarRoomBookingStatus = {
  None: "NONE",
  Accepted: "ACCEPTED",
  Declined: "DECLINED",
  Pending: "PENDING",
} as const;
export type CalendarRoomBookingStatus =
  | (typeof CalendarRoomBookingStatus)[keyof typeof CalendarRoomBookingStatus]
  | (string & {});

export const calendarRoomBookingStatusSchema: EnumSchema<CalendarRoomBookingStatus> =
  s.enumOf<CalendarRoomBookingStatus>(CalendarRoomBookingStatus);
