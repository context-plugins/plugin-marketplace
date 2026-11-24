import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasLocaleSettingsSchema, type BotAliasLocaleSettings } from "./bot-alias-locale-settings.js";
import { botAliasStatus4Schema, type BotAliasStatus4 } from "./bot-alias-status4.js";
import { conversationLogSettingsSchema, type ConversationLogSettings } from "./conversation-log-settings.js";
import {
  sentimentAnalysisSettingsSchema,
  type SentimentAnalysisSettings,
} from "./sentiment-analysis-settings.js";

export type UpdateBotAliasResponse = {
  /** The identifier of the updated bot alias. */
  botAliasId?: string;
  /** The updated name of the bot alias. */
  botAliasName?: string;
  /** The updated description of the bot alias. */
  description?: string;
  /** The updated version of the bot that the alias points to. */
  botVersion?: string;
  /** The updated Lambda functions to use in each locale for the bot alias. */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  /**
   * The current status of the bot alias. When the status is Available the alias is ready for use.
   */
  botAliasStatus?: BotAliasStatus4;
  /** The identifier of the bot with the updated alias. */
  botId?: string;
  /** A timestamp of the date and time that the bot was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotAliasResponseSchema: Schema<UpdateBotAliasResponse> = s.object<UpdateBotAliasResponse>(
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
    botAliasStatus: s.optional(s.lazy(() => botAliasStatus4Schema)),
    botId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
