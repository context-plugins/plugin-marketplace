import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import {
  searchRequestInputDetailsSchema,
  type SearchRequestInputDetails,
} from "./search-request-input-details.js";
import { searchRequestOptionsSchema, type SearchRequestOptions } from "./search-request-options.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type SearchRequest = {
  /** The ISO 8601 timestamp associated with the client request. */
  timestamp?: Date;
  /**
   * A previously received trackingToken for a search associated with the same query. Useful for
   * more requests and requests for other tabs.
   */
  trackingToken?: string;
  sessionInfo?: SessionInfo;
  sourceDocument?: Document;
  /**
   * Hint to the server about how many results to send back. Server may return less or more.
   * Structured results and clustered results don't count towards pageSize.
   */
  pageSize?: number;
  /**
   * Hint to the server about how many characters long a snippet may be. Server may return less or
   * more.
   */
  maxSnippetSize?: number;
  /** The search terms. */
  query: string;
  /**
   * Pagination cursor. A previously received opaque token representing the position in the overall
   * results at which to start.
   */
  cursor?: string;
  /**
   * The unique IDs of the result tabs for which to fetch results. This will have precedence over
   * datasource filters if both are specified and in conflict.
   */
  resultTabIds?: string[];
  inputDetails?: SearchRequestInputDetails;
  requestOptions?: SearchRequestOptions;
  /**
   * Timeout in milliseconds for the request. A `408` error will be returned if handling the request
   * takes longer.
   */
  timeoutMillis?: number;
  /** Whether or not to disable spellcheck. */
  disableSpellcheck?: boolean;
};

export const searchRequestSchema: Schema<SearchRequest> = s.object<SearchRequest>({
  timestamp: s.optional(s.dateTime()),
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  sourceDocument: s.optional(s.lazy(() => documentSchema)),
  pageSize: s.optional(s.int()),
  maxSnippetSize: s.optional(s.int()),
  query: s.string(),
  cursor: s.optional(s.string()),
  resultTabIds: s.optional(s.array(s.string())),
  inputDetails: s.optional(s.lazy(() => searchRequestInputDetailsSchema)),
  requestOptions: s.optional(s.lazy(() => searchRequestOptionsSchema)),
  timeoutMillis: s.optional(s.int()),
  disableSpellcheck: s.optional(s.boolean()),
});
