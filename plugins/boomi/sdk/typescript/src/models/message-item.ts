import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single message in multi-message mode. */
export type MessageItem = {
  /** The message content. May be plain text, JSON, or XML encoded as a string. */
  payload: string;
  /** Optional custom metadata key-value pairs associated with this message. */
  properties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageItemSchema: Schema<MessageItem> = s.object<MessageItem>(
  {
    payload: s.string(),
    properties: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
