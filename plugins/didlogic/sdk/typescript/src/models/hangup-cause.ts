import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the call ended:
 * - `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values
 * - `NORMAL_CLEARING` — the call was answered
 * - `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer
 * - `BUSY` — the called party was busy
 * - `FAILED` — the call could not be connected
 *
 * `null` for calls made before hangup causes were recorded, for calls whose outcome the platform
 * did not recognise, and for API calls that never reached the destination number.
 */
export const HangupCause = {
  AmdMachine: "AMD_MACHINE",
  NormalClearing: "NORMAL_CLEARING",
  NoAnswer: "NO_ANSWER",
  Busy: "BUSY",
  Failed: "FAILED",
} as const;
export type HangupCause = (typeof HangupCause)[keyof typeof HangupCause] | (string & {});

export const hangupCauseSchema: EnumSchema<HangupCause> = s.enumOf<HangupCause>(HangupCause);
