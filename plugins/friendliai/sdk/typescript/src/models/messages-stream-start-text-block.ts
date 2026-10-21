import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamStartTextBlock = {
  /** Content block type. @default "text" */
  type?: "text";
  /** Text content when `type=text`. */
  text: string;
};

export const messagesStreamStartTextBlockSchema: Schema<MessagesStreamStartTextBlock> =
  s.object<MessagesStreamStartTextBlock>({
    type: s.defaulted(s.literal("text"), "text"),
    text: s.string(),
  });
