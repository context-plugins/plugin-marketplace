import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botType1Schema, type BotType1 } from "./bot-type1.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type CreateBotRequest = {
  /** The name of the bot. The bot name must be unique in the account that creates the bot. */
  botName: string;
  /** A description of the bot. It appears in lists to help you identify a particular bot. */
  description?: string;
  /** The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot. */
  roleArn: string;
  dataPrivacy: DataPrivacy;
  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with
   * the bot. A user interaction remains active for the amount of time specified. If no conversation
   * occurs during this time, the session expires and Amazon Lex deletes any data provided before
   * the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   */
  idleSessionTtlInSeconds: number;
  /**
   * A list of tags to add to the bot. You can only add tags when you create a bot. You can't use
   * the UpdateBot operation to update tags. To update tags, use the TagResource operation.
   */
  botTags?: Record<string, string>;
  /**
   * A list of tags to add to the test alias for a bot. You can only add tags when you create a bot.
   * You can't use the UpdateAlias operation to update tags. To update tags on the test alias, use
   * the TagResource operation.
   */
  testBotAliasTags?: Record<string, string>;
  /** The type of a bot to create. */
  botType?: BotType1;
  /** The list of bot members in a network to be created. */
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotRequestSchema: Schema<CreateBotRequest> = s.object<CreateBotRequest>(
  {
    botName: s.string(),
    description: s.optional(s.string()),
    roleArn: s.string(),
    dataPrivacy: dataPrivacySchema,
    idleSessionTtlInSeconds: s.int(),
    botTags: s.optional(s.record(s.string(), s.string())),
    testBotAliasTags: s.optional(s.record(s.string(), s.string())),
    botType: s.optional(s.lazy(() => botType1Schema)),
    botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
