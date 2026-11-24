import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deltaSchema, type Delta } from "./delta.js";
import { messageSchema, type Message } from "./message.js";

export type RawResponse = {
  /** Event type identifier */
  type?: string;
  /** Resume token used to continue the ChatGPT conversation */
  token?: string;
  /** ChatGPT conversation identifier */
  conversationId?: string;
  /** Event payload describing the assistant message */
  message?: Message;
  /** Streaming delta payload from ChatGPT */
  delta?: Delta;
  /** Why ChatGPT stopped streaming */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawResponseSchema: Schema<RawResponse> = s.object<RawResponse>(
  {
    type: s.optional(s.string()),
    token: s.optional(s.string()),
    conversationId: s.optional(s.string()),
    message: s.optional(s.lazy(() => messageSchema)),
    delta: s.optional(s.lazy(() => deltaSchema)),
    reason: s.optional(s.string()),
    _keysMap: {
      conversationId: "conversation_id",
    },
  },
  { additionalProperties: s.json() },
);
