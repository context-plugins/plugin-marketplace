import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conversationModeSchema, type ConversationMode } from "./conversation-mode.js";
import {
  startConversationRequestEventStreamSchema,
  type StartConversationRequestEventStream,
} from "./start-conversation-request-event-stream.js";

export type StartConversationRequest = {
  /** The identifier of the bot to process the request. */
  botId: string;
  /** The alias identifier in use for the bot that processes the request. */
  botAliasId: string;
  /** The locale where the session is in use. */
  localeId: string;
  /** The identifier of the user session that is having the conversation. */
  sessionId: string;
  /**
   * The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO
   * you can send both audio and DTMF information. If the mode is TEXT you can only send text.
   */
  conversationMode?: ConversationMode;
  /** Exactly one member is set. */
  requestEventStream: StartConversationRequestEventStream;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startConversationRequestSchema: Schema<StartConversationRequest> =
  s.object<StartConversationRequest>(
    {
      botId: s.string(),
      botAliasId: s.string(),
      localeId: s.string(),
      sessionId: s.string(),
      conversationMode: s.optional(s.lazy(() => conversationModeSchema)),
      requestEventStream: startConversationRequestEventStreamSchema,
    },
    { additionalProperties: s.json() },
  );
