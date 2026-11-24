import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the timeout that caused this event. */
export const TimeoutType2 = {
  StartToClose: "START_TO_CLOSE",
} as const;
export type TimeoutType2 = (typeof TimeoutType2)[keyof typeof TimeoutType2] | (string & {});

export const timeoutType2Schema: EnumSchema<TimeoutType2> = s.enumOf<TimeoutType2>(TimeoutType2);
