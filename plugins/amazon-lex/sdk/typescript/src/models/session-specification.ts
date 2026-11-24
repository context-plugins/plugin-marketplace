import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conversationEndStateSchema, type ConversationEndState } from "./conversation-end-state.js";
import { invokedIntentSampleSchema, type InvokedIntentSample } from "./invoked-intent-sample.js";
import { modeSchema, type Mode } from "./mode.js";

export type SessionSpecification = {
  /** The identifier of the alias of the bot that the session was held with. */
  botAliasId?: string;
  /** The version of the bot that the session was held with. */
  botVersion?: string;
  /** The locale of the bot that the session was held with. */
  localeId?: string;
  /** The channel that is integrated with the bot that the session was held with. */
  channel?: string;
  /** The identifier of the session. */
  sessionId?: string;
  /**
   * The date and time when the conversation began. A conversation is defined as a unique
   * combination of a sessionId and an originatingRequestId.
   */
  conversationStartTime?: Date;
  /**
   * The date and time when the conversation ended. A conversation is defined as a unique
   * combination of a sessionId and an originatingRequestId.
   */
  conversationEndTime?: Date;
  /**
   * The duration of the conversation in seconds. A conversation is defined as a unique combination
   * of a sessionId and an originatingRequestId.
   */
  conversationDurationSeconds?: number;
  /**
   * The final state of the conversation. A conversation is defined as a unique combination of a
   * sessionId and an originatingRequestId.
   */
  conversationEndState?: ConversationEndState;
  /**
   * The mode of the session. The possible values are as follows: Speech – The session was spoken.
   * Text – The session was written. DTMF – The session used a touch-tone keypad (Dual Tone
   * Multi-Frequency). MultiMode – The session used multiple modes.
   */
  mode?: Mode;
  /** The number of turns that the session took. */
  numberOfTurns?: number;
  /** A list of objects containing the name of an intent that was invoked. */
  invokedIntentSamples?: InvokedIntentSample[];
  /** The identifier of the first request in a session. */
  originatingRequestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionSpecificationSchema: Schema<SessionSpecification> = s.object<SessionSpecification>(
  {
    botAliasId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    channel: s.optional(s.string()),
    sessionId: s.optional(s.string()),
    conversationStartTime: s.optional(s.dateTime()),
    conversationEndTime: s.optional(s.dateTime()),
    conversationDurationSeconds: s.optional(s.int()),
    conversationEndState: s.optional(s.lazy(() => conversationEndStateSchema)),
    mode: s.optional(s.lazy(() => modeSchema)),
    numberOfTurns: s.optional(s.int()),
    invokedIntentSamples: s.optional(s.array(s.lazy(() => invokedIntentSampleSchema))),
    originatingRequestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
