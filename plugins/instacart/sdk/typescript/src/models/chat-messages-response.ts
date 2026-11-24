import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";

export type ChatMessagesResponse = {
  /** The list of chat messages in chronological order. */
  messages?: ChatMessage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatMessagesResponseSchema: Schema<ChatMessagesResponse> = s.object<ChatMessagesResponse>(
  {
    messages: s.optional(s.array(s.lazy(() => chatMessageSchema))),
  },
  { additionalProperties: s.json() },
);
