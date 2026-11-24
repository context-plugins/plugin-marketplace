import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of timeout that expired before the decision task could be completed. */
export const TimeoutType1 = {
  StartToClose: "START_TO_CLOSE",
  ScheduleToStart: "SCHEDULE_TO_START",
} as const;
export type TimeoutType1 = (typeof TimeoutType1)[keyof typeof TimeoutType1] | (string & {});

export const timeoutType1Schema: EnumSchema<TimeoutType1> = s.enumOf<TimeoutType1>(TimeoutType1);
