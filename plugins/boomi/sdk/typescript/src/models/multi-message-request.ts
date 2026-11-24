import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageItemSchema, type MessageItem } from "./message-item.js";

/**
 * Request body for publishing multiple messages in the predefined JSON format. Each message
 * contains a payload and optional properties.
 */
export type MultiMessageRequest = {
  /** Array of messages to publish to the topic. */
  messages: MessageItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiMessageRequestSchema: Schema<MultiMessageRequest> = s.object<MultiMessageRequest>(
  {
    messages: s.array(s.lazy(() => messageItemSchema)),
  },
  { additionalProperties: s.json() },
);
