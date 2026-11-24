import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecognizeUtteranceResponse = {
  /**
   * Indicates whether the input mode to the operation was text, speech, or from a touch-tone
   * keypad.
   */
  inputMode?: string;
  /** Content type as specified in the responseContentType in the request. */
  contentType?: string;
  /**
   * A list of messages that were last sent to the user. The messages are ordered based on the order
   * that you returned the messages from your Lambda function or the order that the messages are
   * defined in the bot. The messages field is compressed with gzip and then base64 encoded. Before
   * you can use the contents of the field, you must decode and decompress the contents. See the
   * example for a simple function to decode and decompress the contents.
   */
  messages?: string;
  /**
   * A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each
   * interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that
   * the interpretation is the correct one, and an optional sentiment response that indicates the
   * sentiment expressed in the utterance. The interpretations field is compressed with gzip and
   * then base64 encoded. Before you can use the contents of the field, you must decode and
   * decompress the contents. See the example for a simple function to decode and decompress the
   * contents.
   */
  interpretations?: string;
  /**
   * Represents the current state of the dialog between the user and the bot. Use this to determine
   * the progress of the conversation and what the next action might be. The sessionState field is
   * compressed with gzip and then base64 encoded. Before you can use the contents of the field, you
   * must decode and decompress the contents. See the example for a simple function to decode and
   * decompress the contents.
   */
  sessionState?: string;
  /**
   * The attributes sent in the request. The requestAttributes field is compressed with gzip and
   * then base64 encoded. Before you can use the contents of the field, you must decode and
   * decompress the contents.
   */
  requestAttributes?: string;
  /** The identifier of the session in use. */
  sessionId?: string;
  /**
   * The text used to process the request. If the input was an audio stream, the inputTranscript
   * field contains the text extracted from the audio stream. This is the text that is actually
   * processed to recognize intents and slot values. You can use this information to determine if
   * Amazon Lex V2 is correctly processing the audio that you send. The inputTranscript field is
   * compressed with gzip and then base64 encoded. Before you can use the contents of the field, you
   * must decode and decompress the contents. See the example for a simple function to decode and
   * decompress the contents.
   */
  inputTranscript?: string;
  /**
   * The prompt or statement to send to the user. This is based on the bot configuration and
   * context. For example, if Amazon Lex V2 did not understand the user intent, it sends the
   * clarificationPrompt configured for the bot. If the intent requires confirmation before taking
   * the fulfillment action, it sends the confirmationPrompt. Another example: Suppose that the
   * Lambda function successfully fulfilled the intent, and sent a message to convey to the user.
   * Then Amazon Lex V2 sends that message in the response.
   */
  audioStream?: string;
  /** The bot member that recognized the utterance. */
  recognizedBotMember?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeUtteranceResponseSchema: Schema<RecognizeUtteranceResponse> =
  s.object<RecognizeUtteranceResponse>(
    {
      inputMode: s.optional(s.string()),
      contentType: s.optional(s.string()),
      messages: s.optional(s.string()),
      interpretations: s.optional(s.string()),
      sessionState: s.optional(s.string()),
      requestAttributes: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      inputTranscript: s.optional(s.string()),
      audioStream: s.optional(s.string()),
      recognizedBotMember: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
