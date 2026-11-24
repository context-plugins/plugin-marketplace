import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentSearchRequest = {
  /** e.g. `government_meeting`, `court_hearing`, `podcast_episode`. */
  contentTypes?: string[] | null;
  /** YYYY-MM-DD. */
  dateFrom?: string | null;
  /** YYYY-MM-DD. */
  dateTo?: string | null;
  /** 1–10 results (default 5). */
  limit?: number | null;
  /** What to find, 1–300 characters. */
  query: string;
  /** `text` (default) or `semantic`. */
  searchType?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentSearchRequestSchema: Schema<AgentSearchRequest> = s.object<AgentSearchRequest>(
  {
    contentTypes: s.optionalNullable(s.array(s.string())),
    dateFrom: s.optionalNullable(s.string()),
    dateTo: s.optionalNullable(s.string()),
    limit: s.optionalNullable(s.int()),
    query: s.string(),
    searchType: s.optionalNullable(s.string()),
    _keysMap: {
      contentTypes: "content_types",
      dateFrom: "date_from",
      dateTo: "date_to",
      searchType: "search_type",
    },
  },
  { additionalProperties: s.json() },
);
