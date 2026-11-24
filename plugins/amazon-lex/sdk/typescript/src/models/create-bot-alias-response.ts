import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasLocaleSettingsSchema, type BotAliasLocaleSettings } from "./bot-alias-locale-settings.js";
import { botAliasStatus1Schema, type BotAliasStatus1 } from "./bot-alias-status1.js";
import { conversationLogSettingsSchema, type ConversationLogSettings } from "./conversation-log-settings.js";
import {
  sentimentAnalysisSettingsSchema,
  type SentimentAnalysisSettings,
} from "./sentiment-analysis-settings.js";

export type CreateBotAliasResponse = {
  /** The unique identifier of the bot alias. */
  botAliasId?: string;
  /** The name specified for the bot alias. */
  botAliasName?: string;
  /** The description specified for the bot alias. */
  description?: string;
  /** The version of the bot associated with this alias. */
  botVersion?: string;
  /** Configuration information for a specific locale. */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  /**
   * The current status of the alias. The alias is first put into the Creating state. When the alias
   * is ready to be used, it is put into the Available state. You can use the DescribeBotAlias
   * operation to get the current state of an alias.
   */
  botAliasStatus?: BotAliasStatus1;
  /** The unique identifier of the bot that this alias applies to. */
  botId?: string;
  /** A Unix timestamp indicating the date and time that the bot alias was created. */
  creationDateTime?: Date;
  /** A list of tags associated with the bot alias. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotAliasResponseSchema: Schema<CreateBotAliasResponse> = s.object<CreateBotAliasResponse>(
  {
    botAliasId: s.optional(s.string()),
    botAliasName: s.optional(s.string()),
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
    botAliasStatus: s.optional(s.lazy(() => botAliasStatus1Schema)),
    botId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    tags: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
