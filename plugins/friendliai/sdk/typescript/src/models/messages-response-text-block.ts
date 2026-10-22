import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesResponseTextBlock = {
  /** Content block type. @default "text" */
  type?: "text";
  /** Assistant-generated text for this block. */
  text: string;
};

export const messagesResponseTextBlockSchema: Schema<MessagesResponseTextBlock> =
  s.object<MessagesResponseTextBlock>({
    type: s.defaulted(s.literal("text"), "text"),
    text: s.string(),
  });
