import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextInitMessage = {
  /** Initial message from the customer to the bot to begin a session. */
  text?: string;
};

export const textInitMessageSchema: Schema<TextInitMessage> = s.object<TextInitMessage>({
  text: s.optional(s.string()),
});
