import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type RecognizeTextRequest = {
  /** The identifier of the bot that processes the request. */
  botId: string;
  /** The alias identifier in use for the bot that processes the request. */
  botAliasId: string;
  /** The locale where the session is in use. */
  localeId: string;
  /** The identifier of the user session that is having the conversation. */
  sessionId: string;
  /** The text that the user entered. Amazon Lex V2 interprets this text. */
  text: string;
  sessionState?: SessionState;
  /**
   * Request-specific information passed between the client application and Amazon Lex V2 The
   * namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes
   * with the prefix x-amz-lex:.
   */
  requestAttributes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeTextRequestSchema: Schema<RecognizeTextRequest> = s.object<RecognizeTextRequest>(
  {
    botId: s.string(),
    botAliasId: s.string(),
    localeId: s.string(),
    sessionId: s.string(),
    text: s.string(),
    sessionState: s.optional(s.lazy(() => sessionStateSchema)),
    requestAttributes: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
