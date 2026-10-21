import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchResponseSchema, type SearchResponse } from "./search-response.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";

export type MessagesResponse = {
  /** Whether there are more results for client to continue requesting. */
  hasMore: boolean;
  searchResponse?: SearchResponse;
  rootMessage?: SearchResult;
};

export const messagesResponseSchema: Schema<MessagesResponse> = s.object<MessagesResponse>({
  hasMore: s.boolean(),
  searchResponse: s.optional(s.lazy(() => searchResponseSchema)),
  rootMessage: s.optional(s.lazy(() => searchResultSchema)),
});
