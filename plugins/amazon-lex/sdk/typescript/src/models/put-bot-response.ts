import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  localeAmazonLexModelBuildingV2VersionsApiSchema,
  type LocaleAmazonLexModelBuildingV2VersionsApi,
} from "./locale-amazon-lex-model-building-v2-versions-api.js";
import { modelsLexIntentSchema, type ModelsLexIntent } from "./models-lex-intent.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";
import { status3Schema, type Status3 } from "./status3.js";
import { tagSchema, type Tag } from "./tag.js";

export type PutBotResponse = {
  /** The name of the bot. */
  name?: string;
  /** A description of the bot. */
  description?: string;
  /** An array of Intent objects. For more information, see PutBot. */
  intents?: ModelsLexIntent[];
  /**
   * Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the
   * improvements, otherwise, false.
   */
  enableModelImprovements?: boolean;
  /**
   * The score that determines where Amazon Lex inserts the AMAZON.FallbackIntent,
   * AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or
   * PostText response. AMAZON.FallbackIntent is inserted if the confidence score for all intents is
   * below this value. AMAZON.KendraSearchIntent is only inserted if it is configured for the bot.
   */
  nluIntentConfidenceThreshold?: number;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  /**
   * When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the
   * status response element to BUILDING. In the READY_BASIC_TESTING state you can test the bot with
   * user inputs that exactly match the utterances configured for the bot's intents and values in
   * the slot types. If Amazon Lex can't build the bot, Amazon Lex sets status to FAILED. Amazon Lex
   * returns the reason for the failure in the failureReason response element. When you set
   * processBehavior to SAVE, Amazon Lex sets the status code to NOT BUILT. When the bot is in the
   * READY state you can test and publish th
   */
  status?: Status3;
  /** If status is FAILED, Amazon Lex provides the reason that it failed to build the bot. */
  failureReason?: string;
  /**
   * The date that the bot was updated. When you create a resource, the creation date and last
   * updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the bot was created. */
  createdDate?: Date;
  /**
   * The maximum length of time that Amazon Lex retains the data gathered in a conversation. For
   * more information, see PutBot.
   */
  idleSessionTtlInSeconds?: number;
  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more
   * information, see PutBot.
   */
  voiceId?: string;
  /** Checksum of the bot that you created. */
  checksum?: string;
  /** The version of the bot. For a new bot, the version is always $LATEST. */
  version?: string;
  /** The target locale for the bot. */
  locale?: LocaleAmazonLexModelBuildingV2VersionsApi;
  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify
   * whether your use of Amazon Lex is related to a website, program, or other application that is
   * directed or targeted, in whole or in part, to children under age 13 and subject to the
   * Children's Online Privacy Protection Act (COPPA) by specifying true or false in the
   * childDirected field. By specifying true in the childDirected field, you confirm that your use
   * of Amazon Lex is related to a website, program, or other application that is directed or
   * targeted, in whole or in part, to children under age 13 and
   */
  childDirected?: boolean;
  /**
   * True if a new version of the bot was created. If the createVersion field was not specified in
   * the request, the createVersion field is set to false in the response.
   */
  createVersion?: boolean;
  /**
   * true if the bot is configured to send user utterances to Amazon Comprehend for sentiment
   * analysis. If the detectSentiment field was not specified in the request, the detectSentiment
   * field is false in the response.
   */
  detectSentiment?: boolean;
  /** A list of tags associated with the bot. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putBotResponseSchema: Schema<PutBotResponse> = s.object<PutBotResponse>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    intents: s.optional(s.array(s.lazy(() => modelsLexIntentSchema))),
    enableModelImprovements: s.optional(s.boolean()),
    nluIntentConfidenceThreshold: s.optional(s.float64()),
    clarificationPrompt: s.optional(s.lazy(() => promptSchema)),
    abortStatement: s.optional(s.lazy(() => statementSchema)),
    status: s.optional(s.lazy(() => status3Schema)),
    failureReason: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    idleSessionTtlInSeconds: s.optional(s.int()),
    voiceId: s.optional(s.string()),
    checksum: s.optional(s.string()),
    version: s.optional(s.string()),
    locale: s.optional(s.lazy(() => localeAmazonLexModelBuildingV2VersionsApiSchema)),
    childDirected: s.optional(s.boolean()),
    createVersion: s.optional(s.boolean()),
    detectSentiment: s.optional(s.boolean()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
