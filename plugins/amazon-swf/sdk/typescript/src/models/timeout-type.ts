import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the timeout that caused this event. */
export const TimeoutType = {
  StartToClose: "START_TO_CLOSE",
  ScheduleToStart: "SCHEDULE_TO_START",
  ScheduleToClose: "SCHEDULE_TO_CLOSE",
  Heartbeat: "HEARTBEAT",
} as const;
export type TimeoutType = (typeof TimeoutType)[keyof typeof TimeoutType] | (string & {});

export const timeoutTypeSchema: EnumSchema<TimeoutType> = s.enumOf<TimeoutType>(TimeoutType);
