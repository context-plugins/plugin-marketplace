import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botAnalyzerHistorySummarySchema,
  type BotAnalyzerHistorySummary,
} from "./bot-analyzer-history-summary.js";

export type ListBotAnalyzerHistoryResponse = {
  /** The unique identifier of the bot. */
  botId?: string;
  /** The locale identifier used to filter the history. */
  localeId?: string;
  /** The bot version used to filter the history. */
  botVersion?: string;
  /**
   * A list of historical analysis executions, ordered by creation date with the most recent first.
   */
  botAnalyzerHistoryList?: BotAnalyzerHistorySummary[];
  /**
   * If the response is truncated, this token can be used in a subsequent request to retrieve the
   * next page of history entries.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotAnalyzerHistoryResponseSchema: Schema<ListBotAnalyzerHistoryResponse> =
  s.object<ListBotAnalyzerHistoryResponse>(
    {
      botId: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      botAnalyzerHistoryList: s.optional(s.array(s.lazy(() => botAnalyzerHistorySummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
