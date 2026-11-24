import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutSessionResponse = {
  /**
   * The type of response. Same as the type specified in the responseContentType field in the
   * request.
   */
  contentType?: string;
  /**
   * A list of messages that were last sent to the user. The messages are ordered based on how you
   * return the messages from you Lambda function or the order that the messages are defined in the
   * bot.
   */
  messages?: string;
  /**
   * A base-64-encoded gzipped field that represents the current state of the dialog between the
   * user and the bot. Use this to determine the progress of the conversation and what the next
   * action may be.
   */
  sessionState?: string;
  /**
   * A base-64-encoded gzipped field that provides request-specific information passed between the
   * client application and Amazon Lex V2. These are the same as the requestAttribute parameter in
   * the call to the PutSession operation.
   */
  requestAttributes?: string;
  /** The identifier of the session that received the data. */
  sessionId?: string;
  /**
   * If the requested content type was audio, the audio version of the message to convey to the
   * user.
   */
  audioStream?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putSessionResponseSchema: Schema<PutSessionResponse> = s.object<PutSessionResponse>(
  {
    contentType: s.optional(s.string()),
    messages: s.optional(s.string()),
    sessionState: s.optional(s.string()),
    requestAttributes: s.optional(s.string()),
    sessionId: s.optional(s.string()),
    audioStream: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
