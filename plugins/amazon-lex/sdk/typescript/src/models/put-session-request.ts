import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeV2LexMessageSchema, type RuntimeV2LexMessage } from "./runtime-v2-lex-message.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type PutSessionRequest = {
  /** The identifier of the bot that receives the session data. */
  botId: string;
  /** The alias identifier of the bot that receives the session data. */
  botAliasId: string;
  /** The locale where the session is in use. */
  localeId: string;
  /** The identifier of the session that receives the session data. */
  sessionId: string;
  /**
   * A list of messages to send to the user. Messages are sent in the order that they are defined in
   * the list.
   */
  messages?: RuntimeV2LexMessage[];
  sessionState: SessionState;
  /**
   * Request-specific information passed between Amazon Lex V2 and the client application. The
   * namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes
   * with the prefix x-amz-lex:.
   */
  requestAttributes?: Record<string, string>;
  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech depending
   * on the value of this parameter. If the value is text/plain; charset=utf-8, Amazon Lex V2
   * returns text in the response.
   */
  responseContentType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putSessionRequestSchema: Schema<PutSessionRequest> = s.object<PutSessionRequest>(
  {
    botId: s.string(),
    botAliasId: s.string(),
    localeId: s.string(),
    sessionId: s.string(),
    messages: s.optional(s.array(s.lazy(() => runtimeV2LexMessageSchema))),
    sessionState: sessionStateSchema,
    requestAttributes: s.optional(s.record(s.string(), s.string())),
    responseContentType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
