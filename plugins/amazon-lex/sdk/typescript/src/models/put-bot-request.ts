import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locale2Schema, type Locale2 } from "./locale2.js";
import { modelsLexIntentSchema, type ModelsLexIntent } from "./models-lex-intent.js";
import { processBehaviorSchema, type ProcessBehavior } from "./process-behavior.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";
import { tagSchema, type Tag } from "./tag.js";

export type PutBotRequest = {
  /** The name of the bot. The name is not case sensitive. */
  name: string;
  /** A description of the bot. */
  description?: string;
  /**
   * An array of Intent objects. Each intent represents a command that a user can express. For
   * example, a pizza ordering bot might support an OrderPizza intent. For more information, see
   * how-it-works.
   */
  intents?: ModelsLexIntent[];
  /**
   * Set to true to enable access to natural language understanding improvements. When you set the
   * enableModelImprovements parameter to true you can use the nluIntentConfidenceThreshold
   * parameter to configure confidence scores. For more information, see Confidence Scores. You can
   * only set the enableModelImprovements parameter in certain Regions. If you set the parameter to
   * true, your bot has access to accuracy improvements. The Regions where you can set the
   * enableModelImprovements parameter to true are: US East (N. Virginia) (us-east-1) US West
   * (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southea
   */
  enableModelImprovements?: boolean;
  /**
   * Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent,
   * AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or
   * PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if
   * they are configured for the bot. You must set the enableModelImprovements parameter to true to
   * use confidence scores in the following regions. US East (N. Virginia) (us-east-1) US West
   * (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southeast-2) EU (Ireland) (eu-west-1) In other
   * Regions, the enableModelImprovements parameter is set to t
   */
  nluIntentConfidenceThreshold?: number;
  clarificationPrompt?: Prompt;
  abortStatement?: Statement;
  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. A user
   * interaction session remains active for the amount of time specified. If no conversation occurs
   * during this time, the session expires and Amazon Lex deletes any data provided before the
   * timeout. For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked
   * halfway through placing an order. If the user doesn't complete the order within the specified
   * time, Amazon Lex discards the slot information that it gathered, and the user must start over.
   * If you don't include the idleSession
   */
  idleSessionTtlInSeconds?: number;
  /**
   * The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user.
   * The locale configured for the voice must match the locale of the bot. For more information, see
   * Voices in Amazon Polly in the Amazon Polly Developer Guide.
   */
  voiceId?: string;
  /**
   * Identifies a specific revision of the $LATEST version. When you create a new bot, leave the
   * checksum field blank. If you specify a checksum you get a BadRequestException exception. When
   * you want to update a bot, set the checksum field to the checksum of the most recent revision of
   * the $LATEST version. If you don't specify the checksum field, or if the checksum does not match
   * the $LATEST version, you get a PreconditionFailedException exception.
   */
  checksum?: string;
  /**
   * If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be
   * run. If you set the element to SAVE Amazon Lex saves the bot, but doesn't build it. If you
   * don't specify this value, the default value is BUILD.
   */
  processBehavior?: ProcessBehavior;
  /**
   * Specifies the target locale for the bot. Any intent used in the bot must be compatible with the
   * locale of the bot. The default is en-US.
   */
  locale: Locale2;
  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify
   * whether your use of Amazon Lex is related to a website, program, or other application that is
   * directed or targeted, in whole or in part, to children under age 13 and subject to the
   * Children's Online Privacy Protection Act (COPPA) by specifying true or false in the
   * childDirected field. By specifying true in the childDirected field, you confirm that your use
   * of Amazon Lex is related to a website, program, or other application that is directed or
   * targeted, in whole or in part, to children under age 13 and
   */
  childDirected: boolean;
  /**
   * When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you
   * don't specify detectSentiment, the default is false.
   */
  detectSentiment?: boolean;
  /**
   * When set to true a new numbered version of the bot is created. This is the same as calling the
   * CreateBotVersion operation. If you don't specify createVersion, the default is false.
   */
  createVersion?: boolean;
  /**
   * A list of tags to add to the bot. You can only add tags when you create a bot, you can't use
   * the PutBot operation to update the tags on a bot. To update tags, use the TagResource
   * operation.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putBotRequestSchema: Schema<PutBotRequest> = s.object<PutBotRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    intents: s.optional(s.array(s.lazy(() => modelsLexIntentSchema))),
    enableModelImprovements: s.optional(s.boolean()),
    nluIntentConfidenceThreshold: s.optional(s.float64()),
    clarificationPrompt: s.optional(s.lazy(() => promptSchema)),
    abortStatement: s.optional(s.lazy(() => statementSchema)),
    idleSessionTtlInSeconds: s.optional(s.int()),
    voiceId: s.optional(s.string()),
    checksum: s.optional(s.string()),
    processBehavior: s.optional(s.lazy(() => processBehaviorSchema)),
    locale: locale2Schema,
    childDirected: s.boolean(),
    detectSentiment: s.optional(s.boolean()),
    createVersion: s.optional(s.boolean()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
