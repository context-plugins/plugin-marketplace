import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type BotImportSpecification = {
  /** The name that Amazon Lex should use for the bot. */
  botName: string;
  /** The Amazon Resource Name (ARN) of the IAM role used to build and run the bot. */
  roleArn: string;
  dataPrivacy: DataPrivacy;
  errorLogSettings?: ErrorLogSettings;
  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with
   * the bot. A user interaction remains active for the amount of time specified. If no conversation
   * occurs during this time, the session expires and Amazon Lex deletes any data provided before
   * the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   */
  idleSessionTtlInSeconds?: number;
  /**
   * A list of tags to add to the bot. You can only add tags when you import a bot. You can't use
   * the UpdateBot operation to update tags. To update tags, use the TagResource operation.
   */
  botTags?: Record<string, string>;
  /**
   * A list of tags to add to the test alias for a bot. You can only add tags when you import a bot.
   * You can't use the UpdateAlias operation to update tags. To update tags on the test alias, use
   * the TagResource operation.
   */
  testBotAliasTags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botImportSpecificationSchema: Schema<BotImportSpecification> = s.object<BotImportSpecification>(
  {
    botName: s.string(),
    roleArn: s.string(),
    dataPrivacy: dataPrivacySchema,
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    idleSessionTtlInSeconds: s.optional(s.int()),
    botTags: s.optional(s.record(s.string(), s.string())),
    testBotAliasTags: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
