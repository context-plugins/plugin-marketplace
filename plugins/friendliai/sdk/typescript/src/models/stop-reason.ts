import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StopReason = {
  EndTurn: "end_turn",
  MaxTokens: "max_tokens",
  ToolUse: "tool_use",
  StopSequence: "stop_sequence",
} as const;
export type StopReason = (typeof StopReason)[keyof typeof StopReason] | (string & {});

export const stopReasonSchema: EnumSchema<StopReason> = s.enumOf<StopReason>(StopReason);
