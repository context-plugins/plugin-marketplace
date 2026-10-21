import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextContent = {
  /** The type of the message content. @default "text" */
  type?: "text";
  /** The text content of the message. */
  text: string;
};

export const textContentSchema: Schema<TextContent> = s.object<TextContent>({
  type: s.defaulted(s.literal("text"), "text"),
  text: s.string(),
});
