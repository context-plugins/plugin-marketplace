import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeV2LexMessageSchema, type RuntimeV2LexMessage } from "./runtime-v2-lex-message.js";
import { sessionStateSchema, type SessionState } from "./session-state.js";

export type ConfigurationEvent = {
  /**
   * Request-specific information passed between the client application and Amazon Lex V2. The
   * namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes
   * for prefix x-amz-lex:.
   */
  requestAttributes?: Record<string, string>;
  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech based on
   * the responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns
   * text in the response. If the value begins with audio/, Amazon Lex V2 returns speech in the
   * response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that
   * you specified in the requestContentType parameter. For example, if you specify audio/mpeg as
   * the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the
   * speech returned is audio/pcm in 16-bit, lit
   */
  responseContentType: string;
  sessionState?: SessionState;
  /**
   * A list of messages to send to the user. If you set the welcomeMessage field, you must also set
   * the DialogAction structure's type field.
   */
  welcomeMessages?: RuntimeV2LexMessage[];
  /**
   * Determines whether Amazon Lex V2 should send audio responses to the client application. Set
   * this field to false when the client is operating in a playback mode where audio responses are
   * played to the user. If the client isn't operating in playback mode, such as a text chat
   * application, set this to true so that Amazon Lex V2 doesn't wait for the prompt to finish
   * playing on the client.
   */
  disablePlayback?: boolean;
  /**
   * A unique identifier that your application assigns to the event. You can use this to identify
   * events in logs.
   */
  eventId?: string;
  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   */
  clientTimestampMillis?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configurationEventSchema: Schema<ConfigurationEvent> = s.object<ConfigurationEvent>(
  {
    requestAttributes: s.optional(s.record(s.string(), s.string())),
    responseContentType: s.string(),
    sessionState: s.optional(s.lazy(() => sessionStateSchema)),
    welcomeMessages: s.optional(s.array(s.lazy(() => runtimeV2LexMessageSchema))),
    disablePlayback: s.optional(s.boolean()),
    eventId: s.optional(s.string()),
    clientTimestampMillis: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
