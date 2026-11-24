import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric that you requested. Count – The number of sessions. Success – The number of sessions
 * that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions
 * that the user dropped. Duration – The duration of sessions. TurnPersession – The number of turns
 * in the sessions. Concurrency – The number of sessions occurring in the same period of time.
 */
export const Name17 = {
  Count: "Count",
  Success: "Success",
  Failure: "Failure",
  Dropped: "Dropped",
  Duration: "Duration",
  TurnsPerConversation: "TurnsPerConversation",
  Concurrency: "Concurrency",
} as const;
export type Name17 = (typeof Name17)[keyof typeof Name17] | (string & {});

export const name17Schema: EnumSchema<Name17> = s.enumOf<Name17>(Name17);
