import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./unions/extra.js";

export type AtifToolCall = {
  toolCallId: string;
  functionName: string;
  arguments: Record<string, unknown>;
  extra?: Extra;
};

export const atifToolCallSchema: Schema<AtifToolCall> = s.object<AtifToolCall>({
  toolCallId: s.string(),
  functionName: s.string(),
  arguments: s.record(s.string(), s.unknown()),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    toolCallId: "tool_call_id",
    functionName: "function_name",
  },
});
