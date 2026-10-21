import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";

/** Summary of the document */
export type SummarizeRequest = {
  /** The ISO 8601 timestamp associated with the client request. */
  timestamp?: Date;
  /** Optional query that the summary should be about */
  query?: string;
  /** Optional length of summary output. If not given, defaults to 500 chars. */
  preferredSummaryLength?: number;
  /** Specifications of documents to summarize */
  documentSpecs: DocumentSpec4[];
  /** An opaque token that represents this particular result. To be used for /feedback reporting. */
  trackingToken?: string;
};

export const summarizeRequestSchema: Schema<SummarizeRequest> = s.object<SummarizeRequest>({
  timestamp: s.optional(s.dateTime()),
  query: s.optional(s.string()),
  preferredSummaryLength: s.optional(s.int()),
  documentSpecs: s.array(s.lazy(() => documentSpec4Schema)),
  trackingToken: s.optional(s.string()),
});
