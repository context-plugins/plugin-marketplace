import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorInfoSchema, type ErrorInfo } from "./error-info.js";
import { generatedQnaSchema, type GeneratedQna } from "./generated-qna.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";

export type ResultsResponse = {
  /**
   * A token that should be passed for additional requests related to this request (such as more
   * results requests).
   */
  trackingToken?: string;
  sessionInfo?: SessionInfo;
  results?: SearchResult[];
  structuredResults?: StructuredResult[];
  generatedQnaResult?: GeneratedQna;
  errorInfo?: ErrorInfo;
  /** A platform-generated request ID to correlate backend logs. */
  requestId?: string;
  /** Time in milliseconds the backend took to respond to the request. */
  backendTimeMillis?: number;
};

export const resultsResponseSchema: Schema<ResultsResponse> = s.object<ResultsResponse>({
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  results: s.optional(s.array(s.lazy(() => searchResultSchema))),
  structuredResults: s.optional(s.array(s.lazy(() => structuredResultSchema))),
  generatedQnaResult: s.optional(s.lazy(() => generatedQnaSchema)),
  errorInfo: s.optional(s.lazy(() => errorInfoSchema)),
  requestId: s.optional(s.string()),
  backendTimeMillis: s.optional(s.int()),
  _keysMap: {
    requestId: "requestID",
  },
});
