import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { senderSchema, type Sender } from "./sender.js";

export type ChatMessage = {
  /** The unique identifier for the message. */
  id?: string;
  /** Who sent the message. */
  sender?: Sender;
  /** The text content of the message. */
  body?: string;
  /** The timestamp when the message was sent. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatMessageSchema: Schema<ChatMessage> = s.object<ChatMessage>(
  {
    id: s.optional(s.string()),
    sender: s.optional(s.lazy(() => senderSchema)),
    body: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
