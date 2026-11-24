import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLogsDataSourceFilterBySchema,
  type ConversationLogsDataSourceFilterBy,
} from "./conversation-logs-data-source-filter-by.js";

export type ConversationLogsDataSource = {
  /** The bot Id from the conversation logs. */
  botId: string;
  /** The bot alias Id from the conversation logs. */
  botAliasId: string;
  /** The locale Id of the conversation log. */
  localeId: string;
  filter: ConversationLogsDataSourceFilterBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationLogsDataSourceSchema: Schema<ConversationLogsDataSource> =
  s.object<ConversationLogsDataSource>(
    {
      botId: s.string(),
      botAliasId: s.string(),
      localeId: s.string(),
      filter: conversationLogsDataSourceFilterBySchema,
    },
    { additionalProperties: s.json() },
  );
