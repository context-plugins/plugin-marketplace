import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextMessage = {
  /** Message type for replying to the bot through text. @default "text" */
  type?: "text";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /** Message ID of the previous response you are replying to. */
  inReplyToMessageId?: string;
  /**
   * Text reply to the bot. To answer a question with choices with a text message, type the
   * `choiceLabel`.
   */
  text: string;
};

export const textMessageSchema: Schema<TextMessage> = s.object<TextMessage>({
  type: s.defaulted(s.literal("text"), "text"),
  sequenceId: s.int(),
  inReplyToMessageId: s.optional(s.string()),
  text: s.string(),
});
