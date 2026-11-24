import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The final state of the conversation. A conversation is defined as a unique combination of a
 * sessionId and an originatingRequestId.
 */
export const ConversationEndState = {
  Success: "Success",
  Failure: "Failure",
  Dropped: "Dropped",
} as const;
export type ConversationEndState =
  | (typeof ConversationEndState)[keyof typeof ConversationEndState]
  | (string & {});

export const conversationEndStateSchema: EnumSchema<ConversationEndState> =
  s.enumOf<ConversationEndState>(ConversationEndState);
