import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasHistoryEventSchema, type BotAliasHistoryEvent } from "./bot-alias-history-event.js";
import { botAliasLocaleSettingsSchema, type BotAliasLocaleSettings } from "./bot-alias-locale-settings.js";
import { botAliasStatus3Schema, type BotAliasStatus3 } from "./bot-alias-status3.js";
import { conversationLogSettingsSchema, type ConversationLogSettings } from "./conversation-log-settings.js";
import { parentBotNetworkSchema, type ParentBotNetwork } from "./parent-bot-network.js";
import {
  sentimentAnalysisSettingsSchema,
  type SentimentAnalysisSettings,
} from "./sentiment-analysis-settings.js";

export type DescribeBotAliasResponse = {
  /** The identifier of the bot alias. */
  botAliasId?: string;
  /** The name of the bot alias. */
  botAliasName?: string;
  /** The description of the bot alias. */
  description?: string;
  /** The version of the bot associated with the bot alias. */
  botVersion?: string;
  /** The locale settings that are unique to the alias. */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
  conversationLogSettings?: ConversationLogSettings;
  sentimentAnalysisSettings?: SentimentAnalysisSettings;
  /**
   * A list of events that affect a bot alias. For example, an event is recorded when the version
   * that the alias points to changes.
   */
  botAliasHistoryEvents?: BotAliasHistoryEvent[];
  /**
   * The current status of the alias. When the alias is Available, the alias is ready for use with
   * your bot.
   */
  botAliasStatus?: BotAliasStatus3;
  /** The identifier of the bot associated with the bot alias. */
  botId?: string;
  /** A timestamp of the date and time that the alias was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the alias was last updated. */
  lastUpdatedDateTime?: Date;
  /** A list of the networks to which the bot alias you described belongs. */
  parentBotNetworks?: ParentBotNetwork[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotAliasResponseSchema: Schema<DescribeBotAliasResponse> =
  s.object<DescribeBotAliasResponse>(
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
      botAliasHistoryEvents: s.optional(s.array(s.lazy(() => botAliasHistoryEventSchema))),
      botAliasStatus: s.optional(s.lazy(() => botAliasStatus3Schema)),
      botId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      parentBotNetworks: s.optional(s.array(s.lazy(() => parentBotNetworkSchema))),
    },
    { additionalProperties: s.json() },
  );
