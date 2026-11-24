import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasLocaleSettingsSchema, type BotAliasLocaleSettings } from "./bot-alias-locale-settings.js";
import { conversationLogSettingsSchema, type ConversationLogSettings } from "./conversation-log-settings.js";
import {
  sentimentAnalysisSettingsSchema,
  type SentimentAnalysisSettings,
} from "./sentiment-analysis-settings.js";

export type CreateBotAliasRequest = {
  /** The alias to create. The name must be unique for the bot. */
  botAliasName: string;
  /** A description of the alias. Use this description to help identify the alias. */
  description?: string;
  /**
   * The version of the bot that this alias points to. You can use the UpdateBotAlias operation to
   * change the bot version associated with the alias.
   */
  botVersion?: string;
  /**
   * Maps configuration information to a specific locale. You can use this parameter to specify a
   * specific Lambda function to run different functions in different locales.
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  /** The unique identifier of the bot that the alias applies to. */
  botId: string;
  /**
   * A list of tags to add to the bot alias. You can only add tags when you create an alias, you
   * can't use the UpdateBotAlias operation to update the tags on a bot alias. To update tags, use
   * the TagResource operation.
   */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotAliasRequestSchema: Schema<CreateBotAliasRequest> = s.object<CreateBotAliasRequest>(
  {
    botAliasName: s.string(),
    description: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    botAliasLocaleSettings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => botAliasLocaleSettingsSchema),
      ),
    ),
    conversationLogSettings: s.optional(s.lazy(() => conversationLogSettingsSchema)),
    sentimentAnalysisSettings: s.optional(s.lazy(() => sentimentAnalysisSettingsSchema)),
    botId: s.string(),
    tags: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
