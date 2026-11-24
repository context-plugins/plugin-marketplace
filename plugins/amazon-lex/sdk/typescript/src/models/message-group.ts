import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";

export type MessageGroup = {
  message: Message;
  /**
   * Message variations to send to the user. When variations are defined, Amazon Lex chooses the
   * primary message or one of the variations to send to the user.
   */
  variations?: Message[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageGroupSchema: Schema<MessageGroup> = s.object<MessageGroup>(
  {
    message: messageSchema,
    variations: s.optional(s.array(s.lazy(() => messageSchema))),
  },
  { additionalProperties: s.json() },
);
