import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  locale1AmazonLexModelBuildingV2VersionsApiSchema,
  type Locale1AmazonLexModelBuildingV2VersionsApi,
} from "./locale1-amazon-lex-model-building-v2-versions-api.js";
import { modelsLexIntentSchema, type ModelsLexIntent } from "./models-lex-intent.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";
import {
  status2AmazonLexModelBuildingV2VersionsApiSchema,
  type Status2AmazonLexModelBuildingV2VersionsApi,
} from "./status2-amazon-lex-model-building-v2-versions-api.js";

export type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi = {
  /** The name of the bot. */
  name?: string;
  /** A description of the bot. */
  description?: string;
  /** An array of Intent objects. For more information, see PutBot. */
  intents?: ModelsLexIntent[];
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  /**
   * When you send a request to create or update a bot, Amazon Lex sets the status response element
   * to BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't
   * build the bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the
   * failureReason response element.
   */
  status?: Status2AmazonLexModelBuildingV2VersionsApi;
  /** If status is FAILED, Amazon Lex provides the reason that it failed to build the bot. */
  failureReason?: string;
  /** The date when the $LATEST version of this bot was updated. */
  lastUpdatedDate?: Date;
  /** The date when the bot version was created. */
  createdDate?: Date;
  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For
   * more information, see PutBot.
   */
  idleSessionTtlInSeconds?: number;
  /** The Amazon Polly voice ID that Amazon Lex uses for voice interactions with the user. */
  voiceId?: string;
  /** Checksum identifying the version of the bot that was created. */
  checksum?: string;
  /** The version of the bot. */
  version?: string;
  /** Specifies the target locale for the bot. */
  locale?: Locale1AmazonLexModelBuildingV2VersionsApi;
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
   * Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the
   * improvements, otherwise, false.
   */
  enableModelImprovements?: boolean;
  /**
   * Indicates whether utterances entered by the user should be sent to Amazon Comprehend for
   * sentiment analysis.
   */
  detectSentiment?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApiSchema: Schema<ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi> =
  s.object<ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      intents: s.optional(s.array(s.lazy(() => modelsLexIntentSchema))),
      clarificationPrompt: s.optional(s.lazy(() => promptSchema)),
      abortStatement: s.optional(s.lazy(() => statementSchema)),
      status: s.optional(s.lazy(() => status2AmazonLexModelBuildingV2VersionsApiSchema)),
      failureReason: s.optional(s.string()),
      lastUpdatedDate: s.optional(s.dateTime()),
      createdDate: s.optional(s.dateTime()),
      idleSessionTtlInSeconds: s.optional(s.int()),
      voiceId: s.optional(s.string()),
      checksum: s.optional(s.string()),
      version: s.optional(s.string()),
      locale: s.optional(s.lazy(() => locale1AmazonLexModelBuildingV2VersionsApiSchema)),
      childDirected: s.optional(s.boolean()),
      enableModelImprovements: s.optional(s.boolean()),
      detectSentiment: s.optional(s.boolean()),
      _keysMap: {
        idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
      },
    },
    { additionalProperties: s.json() },
  );
