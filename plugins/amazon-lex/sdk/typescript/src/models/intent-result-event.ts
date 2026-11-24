import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputModeSchema, type InputMode } from "./input-mode.js";
import { interpretationSchema, type Interpretation } from "./interpretation.js";
import { recognizedBotMemberSchema, type RecognizedBotMember } from "./recognized-bot-member.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type IntentResultEvent = {
  /** Indicates whether the input to the operation was text, speech, or from a touch-tone keypad. */
  inputMode?: InputMode;
  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each
   * interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that
   * the interpretation is the correct one, and an optional sentiment response that indicates the
   * sentiment expressed in the utterance.
   */
  interpretations?: Interpretation[];
  sessionState?: SessionState;
  /** The attributes sent in the request. */
  requestAttributes?: Record<string, string>;
  /** The identifier of the session in use. */
  sessionId?: string;
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form
   * RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon
   * Lex V2 in the current session.
   */
  eventId?: string;
  recognizedBotMember?: RecognizedBotMember;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentResultEventSchema: Schema<IntentResultEvent> = s.object<IntentResultEvent>(
  {
    inputMode: s.optional(s.lazy(() => inputModeSchema)),
    interpretations: s.optional(s.array(s.lazy(() => interpretationSchema))),
    sessionState: s.optional(s.lazy(() => sessionStateSchema)),
    requestAttributes: s.optional(s.record(s.string(), s.string())),
    sessionId: s.optional(s.string()),
    eventId: s.optional(s.string()),
    recognizedBotMember: s.optional(s.lazy(() => recognizedBotMemberSchema)),
  },
  { additionalProperties: s.json() },
);
