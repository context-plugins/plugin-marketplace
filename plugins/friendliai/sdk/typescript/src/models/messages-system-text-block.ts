import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesSystemTextBlock = {
  /** System block type. Must be `text`. @default "text" */
  type?: "text";
  /** System instruction text content. */
  text: string;
};

export const messagesSystemTextBlockSchema: Schema<MessagesSystemTextBlock> =
  s.object<MessagesSystemTextBlock>({
    type: s.defaulted(s.literal("text"), "text"),
    text: s.string(),
  });
