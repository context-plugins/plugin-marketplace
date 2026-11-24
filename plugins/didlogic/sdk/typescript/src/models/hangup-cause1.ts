import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HangupCause1 = {
  AmdMachine: "AMD_MACHINE",
  NormalClearing: "NORMAL_CLEARING",
  NoAnswer: "NO_ANSWER",
  Busy: "BUSY",
  Failed: "FAILED",
} as const;
export type HangupCause1 = (typeof HangupCause1)[keyof typeof HangupCause1] | (string & {});

export const hangupCause1Schema: EnumSchema<HangupCause1> = s.enumOf<HangupCause1>(HangupCause1);
