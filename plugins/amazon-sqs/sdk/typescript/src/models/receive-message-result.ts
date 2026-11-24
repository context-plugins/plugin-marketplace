import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";

export type ReceiveMessageResult = {
  /** A list of messages. */
  messages?: Message[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receiveMessageResultSchema: Schema<ReceiveMessageResult> = s.object<ReceiveMessageResult>(
  {
    messages: s.optional(s.array(s.lazy(() => messageSchema))),
    _keysMap: {
      messages: "Messages",
    },
  },
  { additionalProperties: s.json() },
);
