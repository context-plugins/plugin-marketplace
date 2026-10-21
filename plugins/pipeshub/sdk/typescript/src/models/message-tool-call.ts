import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** One tool invocation recorded on a message turn. */
export type MessageToolCall = {
  toolName?: string;
  toolResult?: Record<string, unknown>;
};

export const messageToolCallSchema: Schema<MessageToolCall> = s.object<MessageToolCall>({
  toolName: s.optional(s.string()),
  toolResult: s.optional(s.record(s.string(), s.unknown())),
});
