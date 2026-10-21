import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type ResultsRequest = {
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
};

export const resultsRequestSchema: Schema<ResultsRequest> = s.object<ResultsRequest>({
  timestamp: s.optional(s.dateTime()),
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  sourceDocument: s.optional(s.lazy(() => documentSchema)),
  pageSize: s.optional(s.int()),
  maxSnippetSize: s.optional(s.int()),
});
