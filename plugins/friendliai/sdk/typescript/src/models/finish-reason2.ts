import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FinishReason2 = {
  Stop: "stop",
  Length: "length",
  ToolCalls: "tool_calls",
  Null: "null",
} as const;
export type FinishReason2 = (typeof FinishReason2)[keyof typeof FinishReason2] | (string & {});

export const finishReason2Schema: EnumSchema<FinishReason2> = s.enumOf<FinishReason2>(FinishReason2);
