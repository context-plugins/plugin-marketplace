import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dialogState1AmazonLexModelBuildingV2OperationsApiSchema,
  type DialogState1AmazonLexModelBuildingV2OperationsApi,
} from "./dialog-state1-amazon-lex-model-building-v2-operations-api.js";
import { intentConfidenceSchema, type IntentConfidence } from "./intent-confidence.js";
import {
  messageFormat1AmazonLexModelBuildingV2OperationsApiSchema,
  type MessageFormat1AmazonLexModelBuildingV2OperationsApi,
} from "./message-format1-amazon-lex-model-building-v2-operations-api.js";
import { predictedIntentSchema, type PredictedIntent } from "./predicted-intent.js";
import { responseCardSchema, type ResponseCard } from "./response-card.js";
import { runtimeLexActiveContextSchema, type RuntimeLexActiveContext } from "./runtime-lex-active-context.js";
import {
  runtimeLexSentimentResponseSchema,
  type RuntimeLexSentimentResponse,
} from "./runtime-lex-sentiment-response.js";

export type PostTextResponse = {
  /** The current user intent that Amazon Lex is aware of. */
  intentName?: string;
  nluIntentConfidence?: IntentConfidence;
  /**
   * One to four alternative intents that may be applicable to the user's intent. Each alternative
   * includes a score that indicates how confident Amazon Lex is that the intent matches the user's
   * intent. The intents are sorted by the confidence score.
   */
  alternativeIntents?: PredictedIntent[];
  /**
   * The intent slots that Amazon Lex detected from the user input in the conversation. Amazon Lex
   * creates a resolution list containing likely values for a slot. The value that it returns is
   * determined by the valueSelectionStrategy selected when the slot type was created or updated. If
   * valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided by the user is returned, if
   * the user value is similar to the slot values. If valueSelectionStrategy is set to
   * TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or, if there is no
   * resolution list, null. If you don't specify a va
   */
  slots?: Record<string, string>;
  /** A map of key-value pairs representing the session-specific context information. */
  sessionAttributes?: Record<string, string>;
  /**
   * The message to convey to the user. The message can come from the bot's configuration or from a
   * Lambda function. If the intent is not configured with a Lambda function, or if the Lambda
   * function returned Delegate as the dialogAction.type its response, Amazon Lex decides on the
   * next course of action and selects an appropriate message from the bot's configuration based on
   * the current interaction context. For example, if Amazon Lex isn't able to understand user
   * input, it uses a clarification prompt message. When you create an intent you can assign
   * messages to groups. When messages are assigned to
   */
  message?: string;
  sentimentResponse?: RuntimeLexSentimentResponse;
  /**
   * The format of the response message. One of the following values: PlainText - The message
   * contains plain UTF-8 text. CustomPayload - The message is a custom format defined by the Lambda
   * function. SSML - The message contains text formatted for voice output. Composite - The message
   * contains an escaped JSON object containing one or more messages from the groups that messages
   * were assigned to when the intent was created.
   */
  messageFormat?: MessageFormat1AmazonLexModelBuildingV2OperationsApi;
  /**
   * Identifies the current state of the user interaction. Amazon Lex returns one of the following
   * values as dialogState. The client can optionally use this information to customize the user
   * interface. ElicitIntent - Amazon Lex wants to elicit user intent. For example, a user might
   * utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from
   * this utterance, it will return this dialogState. ConfirmIntent - Amazon Lex is expecting a
   * "yes" or "no" response. For example, Amazon Lex wants user confirmation before fulfilling an
   * intent. Instead of a simple "yes" or "no," a
   */
  dialogState?: DialogState1AmazonLexModelBuildingV2OperationsApi;
  /**
   * If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is
   * eliciting a value.
   */
  slotToElicit?: string;
  responseCard?: ResponseCard;
  /** A unique identifier for the session. */
  sessionId?: string;
  /**
   * The version of the bot that responded to the conversation. You can use this information to help
   * determine if one version of a bot is performing better than another version.
   */
  botVersion?: string;
  /**
   * A list of active contexts for the session. A context can be set when an intent is fulfilled or
   * by calling the PostContent, PostText, or PutSession operation. You can use a context to control
   * the intents that can follow up an intent, or to modify the operation of your application.
   */
  activeContexts?: RuntimeLexActiveContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postTextResponseSchema: Schema<PostTextResponse> = s.object<PostTextResponse>(
  {
    intentName: s.optional(s.string()),
    nluIntentConfidence: s.optional(s.lazy(() => intentConfidenceSchema)),
    alternativeIntents: s.optional(s.array(s.lazy(() => predictedIntentSchema))),
    slots: s.optional(s.record(s.string(), s.string())),
    sessionAttributes: s.optional(s.record(s.string(), s.string())),
    message: s.optional(s.string()),
    sentimentResponse: s.optional(s.lazy(() => runtimeLexSentimentResponseSchema)),
    messageFormat: s.optional(s.lazy(() => messageFormat1AmazonLexModelBuildingV2OperationsApiSchema)),
    dialogState: s.optional(s.lazy(() => dialogState1AmazonLexModelBuildingV2OperationsApiSchema)),
    slotToElicit: s.optional(s.string()),
    responseCard: s.optional(s.lazy(() => responseCardSchema)),
    sessionId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    activeContexts: s.optional(s.array(s.lazy(() => runtimeLexActiveContextSchema))),
  },
  { additionalProperties: s.json() },
);
