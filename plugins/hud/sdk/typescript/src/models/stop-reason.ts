import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StopReason = {
  Done: "done",
  MaxSteps: "max_steps",
  Length: "length",
  Timeout: "timeout",
  MalformedToolCall: "malformed_tool_call",
} as const;
export type StopReason = (typeof StopReason)[keyof typeof StopReason] | (string & {});

export const stopReasonSchema: EnumSchema<StopReason> = s.enumOf<StopReason>(StopReason);
