import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interpretationSchema, type Interpretation } from "./interpretation.js";
import { recognizedBotMemberSchema, type RecognizedBotMember } from "./recognized-bot-member.js";
import { runtimeV2LexMessageSchema, type RuntimeV2LexMessage } from "./runtime-v2-lex-message.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type RecognizeTextResponse = {
  /**
   * A list of messages last sent to the user. The messages are ordered based on the order that you
   * returned the messages from your Lambda function or the order that the messages are defined in
   * the bot.
   */
  messages?: RuntimeV2LexMessage[];
  sessionState?: SessionState;
  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each
   * interpretation includes the intent, a score that indicates now confident Amazon Lex V2 is that
   * the interpretation is the correct one, and an optional sentiment response that indicates the
   * sentiment expressed in the utterance.
   */
  interpretations?: Interpretation[];
  /** The attributes sent in the request. */
  requestAttributes?: Record<string, string>;
  /** The identifier of the session in use. */
  sessionId?: string;
  recognizedBotMember?: RecognizedBotMember;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeTextResponseSchema: Schema<RecognizeTextResponse> = s.object<RecognizeTextResponse>(
  {
    messages: s.optional(s.array(s.lazy(() => runtimeV2LexMessageSchema))),
    sessionState: s.optional(s.lazy(() => sessionStateSchema)),
    interpretations: s.optional(s.array(s.lazy(() => interpretationSchema))),
    requestAttributes: s.optional(s.record(s.string(), s.string())),
    sessionId: s.optional(s.string()),
    recognizedBotMember: s.optional(s.lazy(() => recognizedBotMemberSchema)),
  },
  { additionalProperties: s.json() },
);
