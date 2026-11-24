import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Why the call ended. `null` while the call is live and on a normal end. */
export const Reason = {
  NoAnswer: "no_answer",
  Busy: "busy",
  Unreachable: "unreachable",
  Canceled: "canceled",
  TimedOut: "timed_out",
  PlatformError: "platform_error",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
