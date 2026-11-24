import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  localeAmazonLexModelBuildingV2VersionsApiSchema,
  type LocaleAmazonLexModelBuildingV2VersionsApi,
} from "./locale-amazon-lex-model-building-v2-versions-api.js";
import { modelsLexIntentSchema, type ModelsLexIntent } from "./models-lex-intent.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";
import {
  status1AmazonLexModelBuildingV2VersionsApiSchema,
  type Status1AmazonLexModelBuildingV2VersionsApi,
} from "./status1-amazon-lex-model-building-v2-versions-api.js";

export type GetBotResponse = {
  /** The name of the bot. */
  name?: string;
  /** A description of the bot. */
  description?: string;
  /** An array of intent objects. For more information, see PutBot. */
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
   * The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing
   * and use. If the status of the bot is READY_BASIC_TESTING, you can test the bot using the exact
   * utterances specified in the bot's intents. When the bot is ready for full testing or to run,
   * the status is READY. If there was a problem with building the bot, the status is FAILED and the
   * failureReason field explains why the bot did not build. If the bot was saved but not built, the
   * status is NOT_BUILT.
   */
  status?: Status1AmazonLexModelBuildingV2VersionsApi;
  /** If status is FAILED, Amazon Lex explains why it failed to build the bot. */
  failureReason?: string;
  /**
   * The date that the bot was updated. When you create a resource, the creation date and last
   * updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the bot was created. */
  createdDate?: Date;
  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For
   * more information, see PutBot.
   */
  idleSessionTtlInSeconds?: number;
  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more
   * information, see PutBot.
   */
  voiceId?: string;
  /** Checksum of the bot used to identify a specific revision of the bot's $LATEST version. */
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
   * Indicates whether user utterances should be sent to Amazon Comprehend for sentiment analysis.
   */
  detectSentiment?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotResponseSchema: Schema<GetBotResponse> = s.object<GetBotResponse>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    intents: s.optional(s.array(s.lazy(() => modelsLexIntentSchema))),
    enableModelImprovements: s.optional(s.boolean()),
    nluIntentConfidenceThreshold: s.optional(s.float64()),
    clarificationPrompt: s.optional(s.lazy(() => promptSchema)),
    abortStatement: s.optional(s.lazy(() => statementSchema)),
    status: s.optional(s.lazy(() => status1AmazonLexModelBuildingV2VersionsApiSchema)),
    failureReason: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    idleSessionTtlInSeconds: s.optional(s.int()),
    voiceId: s.optional(s.string()),
    checksum: s.optional(s.string()),
    version: s.optional(s.string()),
    locale: s.optional(s.lazy(() => localeAmazonLexModelBuildingV2VersionsApiSchema)),
    childDirected: s.optional(s.boolean()),
    detectSentiment: s.optional(s.boolean()),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
