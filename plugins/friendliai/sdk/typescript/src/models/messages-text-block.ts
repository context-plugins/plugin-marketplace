import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesTextBlock = {
  /** Content block type. Must be `text`. @default "text" */
  type?: "text";
  /** Text content for this block. */
  text: string;
};

export const messagesTextBlockSchema: Schema<MessagesTextBlock> = s.object<MessagesTextBlock>({
  type: s.defaulted(s.literal("text"), "text"),
  text: s.string(),
});
