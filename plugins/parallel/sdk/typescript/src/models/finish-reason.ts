import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FinishReason = {
  Stop: "stop",
  Length: "length",
  ToolCalls: "tool_calls",
  ContentFilter: "content_filter",
  FunctionCall: "function_call",
} as const;
export type FinishReason = (typeof FinishReason)[keyof typeof FinishReason] | (string & {});

export const finishReasonSchema: EnumSchema<FinishReason> = s.enumOf<FinishReason>(FinishReason);
