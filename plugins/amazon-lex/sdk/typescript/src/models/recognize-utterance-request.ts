import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecognizeUtteranceRequest = {
  /** The identifier of the bot that should receive the request. */
  botId: string;
  /** The alias identifier in use for the bot that should receive the request. */
  botAliasId: string;
  /** The locale where the session is in use. */
  localeId: string;
  /** The identifier of the session in use. */
  sessionId: string;
  /**
   * Sets the state of the session with the user. You can use this to set the current intent,
   * attributes, context, and dialog action. Use the dialog action to determine the next step that
   * Amazon Lex V2 should use in the conversation with the user. The sessionState field must be
   * compressed using gzip and then base64 encoded before sending to Amazon Lex V2.
   */
  sessionState?: string;
  /**
   * Request-specific information passed between the client application and Amazon Lex V2 The
   * namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes
   * for prefix x-amz-lex:. The requestAttributes field must be compressed using gzip and then
   * base64 encoded before sending to Amazon Lex V2.
   */
  requestAttributes?: string;
  /**
   * Indicates the format for audio input or that the content is text. The header must start with
   * one of the following prefixes: PCM format, audio data must be in little-endian byte order.
   * audio/l16; rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1 audio/lpcm;
   * sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false Opus format
   * audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text
   * format text/plain; charset=utf-8
   */
  requestContentType: string;
  /**
   * The message that Amazon Lex V2 returns in the response can be either text or speech based on
   * the responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns
   * text in the response. If the value begins with audio/, Amazon Lex V2 returns speech in the
   * response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that
   * you specified in the responseContentType parameter. For example, if you specify audio/mpeg as
   * the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the
   * speech returned is audio/pcm at 16 KHz in
   */
  responseContentType?: string;
  /**
   * User input in PCM or Opus audio format or text format as described in the requestContentType
   * parameter.
   */
  inputStream?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeUtteranceRequestSchema: Schema<RecognizeUtteranceRequest> =
  s.object<RecognizeUtteranceRequest>(
    {
      botId: s.string(),
      botAliasId: s.string(),
      localeId: s.string(),
      sessionId: s.string(),
      sessionState: s.optional(s.string()),
      requestAttributes: s.optional(s.string()),
      requestContentType: s.string(),
      responseContentType: s.optional(s.string()),
      inputStream: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
