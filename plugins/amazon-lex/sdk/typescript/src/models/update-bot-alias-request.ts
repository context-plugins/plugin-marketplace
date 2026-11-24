import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasLocaleSettingsSchema, type BotAliasLocaleSettings } from "./bot-alias-locale-settings.js";
import { conversationLogSettingsSchema, type ConversationLogSettings } from "./conversation-log-settings.js";
import {
  sentimentAnalysisSettingsSchema,
  type SentimentAnalysisSettings,
} from "./sentiment-analysis-settings.js";

export type UpdateBotAliasRequest = {
  /** The unique identifier of the bot alias. */
  botAliasId: string;
  /** The new name to assign to the bot alias. */
  botAliasName: string;
  /** The new description to assign to the bot alias. */
  description?: string;
  /** The new bot version to assign to the bot alias. */
  botVersion?: string;
  /** The new Lambda functions to use in each locale for the bot alias. */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  /** The identifier of the bot with the updated alias. */
  botId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotAliasRequestSchema: Schema<UpdateBotAliasRequest> = s.object<UpdateBotAliasRequest>(
  {
    botAliasId: s.string(),
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
  },
  { additionalProperties: s.json() },
);
