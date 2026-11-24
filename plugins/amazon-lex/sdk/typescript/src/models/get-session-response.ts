import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interpretationSchema, type Interpretation } from "./interpretation.js";
import { runtimeV2LexMessageSchema, type RuntimeV2LexMessage } from "./runtime-v2-lex-message.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type GetSessionResponse = {
  /** The identifier of the returned session. */
  sessionId?: string;
  /**
   * A list of messages that were last sent to the user. The messages are ordered based on the order
   * that your returned the messages from your Lambda function or the order that messages are
   * defined in the bot.
   */
  messages?: RuntimeV2LexMessage[];
  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each
   * interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that
   * the interpretation is the correct one, and an optional sentiment response that indicates the
   * sentiment expressed in the utterance.
   */
  interpretations?: Interpretation[];
  sessionState?: SessionState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSessionResponseSchema: Schema<GetSessionResponse> = s.object<GetSessionResponse>(
  {
    sessionId: s.optional(s.string()),
    messages: s.optional(s.array(s.lazy(() => runtimeV2LexMessageSchema))),
    interpretations: s.optional(s.array(s.lazy(() => interpretationSchema))),
    sessionState: s.optional(s.lazy(() => sessionStateSchema)),
  },
  { additionalProperties: s.json() },
);
