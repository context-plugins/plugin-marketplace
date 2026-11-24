import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dialogStateAmazonLexModelBuildingV2OperationsApiSchema,
  type DialogStateAmazonLexModelBuildingV2OperationsApi,
} from "./dialog-state-amazon-lex-model-building-v2-operations-api.js";
import {
  messageFormatAmazonLexModelBuildingV2OperationsApiSchema,
  type MessageFormatAmazonLexModelBuildingV2OperationsApi,
} from "./message-format-amazon-lex-model-building-v2-operations-api.js";

export type PostContentResponse = {
  /** Content type as specified in the Accept HTTP header in the request. */
  contentType?: string;
  /** Current user intent that Amazon Lex is aware of. */
  intentName?: string;
  /**
   * Provides a score that indicates how confident Amazon Lex is that the returned intent is the one
   * that matches the user's intent. The score is between 0.0 and 1.0. The score is a relative
   * score, not an absolute score. The score may change based on improvements to Amazon Lex.
   */
  nluIntentConfidence?: string;
  /**
   * One to four alternative intents that may be applicable to the user's intent. Each alternative
   * includes a score that indicates how confident Amazon Lex is that the intent matches the user's
   * intent. The intents are sorted by the confidence score.
   */
  alternativeIntents?: string;
  /**
   * Map of zero or more intent slots (name/value pairs) Amazon Lex detected from the user input
   * during the conversation. The field is base-64 encoded. Amazon Lex creates a resolution list
   * containing likely values for a slot. The value that it returns is determined by the
   * valueSelectionStrategy selected when the slot type was created or updated. If
   * valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided by the user is returned, if
   * the user value is similar to the slot values. If valueSelectionStrategy is set to
   * TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or,
   */
  slots?: string;
  /** Map of key/value pairs representing the session-specific context information. */
  sessionAttributes?: string;
  /**
   * The sentiment expressed in an utterance. When the bot is configured to send utterances to
   * Amazon Comprehend for sentiment analysis, this field contains the result of the analysis.
   */
  sentimentResponse?: string;
  /**
   * You can only use this field in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA,
   * fr-FR, and it-IT locales. In all other locales, the message field is null. You should use the
   * encodedMessage field instead. The message to convey to the user. The message can come from the
   * bot's configuration or from a Lambda function. If the intent is not configured with a Lambda
   * function, or if the Lambda function returned Delegate as the dialogAction.type in its response,
   * Amazon Lex decides on the next course of action and selects an appropriate message from the
   * bot's configuration based on the curre
   */
  message?: string;
  /**
   * The message to convey to the user. The message can come from the bot's configuration or from a
   * Lambda function. If the intent is not configured with a Lambda function, or if the Lambda
   * function returned Delegate as the dialogAction.type in its response, Amazon Lex decides on the
   * next course of action and selects an appropriate message from the bot's configuration based on
   * the current interaction context. For example, if Amazon Lex isn't able to understand user
   * input, it uses a clarification prompt message. When you create an intent you can assign
   * messages to groups. When messages are assigned
   */
  encodedMessage?: string;
  /**
   * The format of the response message. One of the following values: PlainText - The message
   * contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML
   * - The message contains text formatted for voice output. Composite - The message contains an
   * escaped JSON object containing one or more messages from the groups that messages were assigned
   * to when the intent was created.
   */
  messageFormat?: MessageFormatAmazonLexModelBuildingV2OperationsApi;
  /**
   * Identifies the current state of the user interaction. Amazon Lex returns one of the following
   * values as dialogState. The client can optionally use this information to customize the user
   * interface. ElicitIntent - Amazon Lex wants to elicit the user's intent. Consider the following
   * examples: For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex
   * cannot infer the user intent from this utterance, it will return this dialog state.
   * ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants
   * user confirmation before fulfilling an inten
   */
  dialogState?: DialogStateAmazonLexModelBuildingV2OperationsApi;
  /**
   * If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is
   * eliciting a value.
   */
  slotToElicit?: string;
  /**
   * The text used to process the request. You can use this field only in the de-DE, en-AU, en-GB,
   * en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the
   * inputTranscript field is null. You should use the encodedInputTranscript field instead. If the
   * input was an audio stream, the inputTranscript field contains the text extracted from the audio
   * stream. This is the text that is actually processed to recognize intents and slot values. You
   * can use this information to determine if Amazon Lex is correctly processing the audio that you
   * send.
   */
  inputTranscript?: string;
  /**
   * The text used to process the request. If the input was an audio stream, the
   * encodedInputTranscript field contains the text extracted from the audio stream. This is the
   * text that is actually processed to recognize intents and slot values. You can use this
   * information to determine if Amazon Lex is correctly processing the audio that you send. The
   * encodedInputTranscript field is base-64 encoded. You must decode the field before you can use
   * the value.
   */
  encodedInputTranscript?: string;
  /**
   * The prompt (or statement) to convey to the user. This is based on the bot configuration and
   * context. For example, if Amazon Lex did not understand the user intent, it sends the
   * clarificationPrompt configured for the bot. If the intent requires confirmation before taking
   * the fulfillment action, it sends the confirmationPrompt. Another example: Suppose that the
   * Lambda function successfully fulfilled the intent, and sent a message to convey to the user.
   * Then Amazon Lex sends that message in the response.
   */
  audioStream?: string;
  /**
   * The version of the bot that responded to the conversation. You can use this information to help
   * determine if one version of a bot is performing better than another version.
   */
  botVersion?: string;
  /** The unique identifier for the session. */
  sessionId?: string;
  /**
   * A list of active contexts for the session. A context can be set when an intent is fulfilled or
   * by calling the PostContent, PostText, or PutSession operation. You can use a context to control
   * the intents that can follow up an intent, or to modify the operation of your application.
   */
  activeContexts?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postContentResponseSchema: Schema<PostContentResponse> = s.object<PostContentResponse>(
  {
    contentType: s.optional(s.string()),
    intentName: s.optional(s.string()),
    nluIntentConfidence: s.optional(s.string()),
    alternativeIntents: s.optional(s.string()),
    slots: s.optional(s.string()),
    sessionAttributes: s.optional(s.string()),
    sentimentResponse: s.optional(s.string()),
    message: s.optional(s.string()),
    encodedMessage: s.optional(s.string()),
    messageFormat: s.optional(s.lazy(() => messageFormatAmazonLexModelBuildingV2OperationsApiSchema)),
    dialogState: s.optional(s.lazy(() => dialogStateAmazonLexModelBuildingV2OperationsApiSchema)),
    slotToElicit: s.optional(s.string()),
    inputTranscript: s.optional(s.string()),
    encodedInputTranscript: s.optional(s.string()),
    audioStream: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    sessionId: s.optional(s.string()),
    activeContexts: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
