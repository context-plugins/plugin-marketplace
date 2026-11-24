import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric for which you want to get session summary statistics. Count – The number of sessions.
 * Success – The number of sessions that succeeded. Failure – The number of sessions that failed.
 * Dropped – The number of sessions that the user dropped. Duration – The duration of sessions.
 * TurnsPerSession – The number of turns in the sessions. Concurrency – The number of sessions
 * occurring in the same period of time.
 */
export const Name16 = {
  Count: "Count",
  Success: "Success",
  Failure: "Failure",
  Dropped: "Dropped",
  Duration: "Duration",
  TurnsPerConversation: "TurnsPerConversation",
  Concurrency: "Concurrency",
} as const;
export type Name16 = (typeof Name16)[keyof typeof Name16] | (string & {});

export const name16Schema: EnumSchema<Name16> = s.enumOf<Name16>(Name16);
