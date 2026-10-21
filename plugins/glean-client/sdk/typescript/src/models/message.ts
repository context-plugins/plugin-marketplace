import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageTextBlockSchema, type MessageTextBlock } from "./message-text-block.js";

export type Message = {
  /** The role of the message. */
  role?: string;
  /** The content of the message. */
  content?: MessageTextBlock[];
};

export const messageSchema: Schema<Message> = s.object<Message>({
  role: s.optional(s.string()),
  content: s.optional(s.array(s.lazy(() => messageTextBlockSchema))),
});
