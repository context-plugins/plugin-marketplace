import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you
 * can send both audio and DTMF information. If the mode is TEXT you can only send text.
 */
export const ConversationMode = {
  Audio: "AUDIO",
  Text: "TEXT",
} as const;
export type ConversationMode = (typeof ConversationMode)[keyof typeof ConversationMode] | (string & {});

export const conversationModeSchema: EnumSchema<ConversationMode> =
  s.enumOf<ConversationMode>(ConversationMode);
