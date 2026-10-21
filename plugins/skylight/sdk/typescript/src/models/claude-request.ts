import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesSchema, type Messages } from "./unions/messages.js";

export type ClaudeRequest = {
  query: string;
  messages?: Messages;
};

export const claudeRequestSchema: Schema<ClaudeRequest> = s.object<ClaudeRequest>({
  query: s.string(),
  messages: s.optional(s.lazy(() => messagesSchema)),
});
