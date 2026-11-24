import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The measure by which to sort the session analytics data. conversationStartTime – The date and
 * time when the conversation began. A conversation is defined as a unique combination of a
 * sessionId and an originatingRequestId. numberOfTurns – The number of turns that the session took.
 * conversationDurationSeconds – The duration of the conversation in seconds.
 */
export const Name25 = {
  ConversationStartTime: "ConversationStartTime",
  NumberOfTurns: "NumberOfTurns",
  Duration: "Duration",
} as const;
export type Name25 = (typeof Name25)[keyof typeof Name25] | (string & {});

export const name25Schema: EnumSchema<Name25> = s.enumOf<Name25>(Name25);
