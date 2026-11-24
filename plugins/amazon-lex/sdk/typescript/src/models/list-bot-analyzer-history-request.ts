import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBotAnalyzerHistoryRequest = {
  /** The unique identifier of the bot. */
  botId: string;
  /**
   * The locale identifier to filter the history. If not specified, returns history for all locales.
   */
  localeId?: string;
  /** The bot version to filter the history. If not specified, defaults to DRAFT. */
  botVersion?: string;
  /**
   * If the response from a previous request was truncated, the nextToken value is used to retrieve
   * the next page of history entries.
   */
  nextToken?: string;
  /** The maximum number of history entries to return in the response. The default is 10. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotAnalyzerHistoryRequestSchema: Schema<ListBotAnalyzerHistoryRequest> =
  s.object<ListBotAnalyzerHistoryRequest>(
    {
      botId: s.string(),
      localeId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
