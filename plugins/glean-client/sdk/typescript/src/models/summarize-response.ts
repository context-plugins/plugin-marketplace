import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { summarySchema, type Summary } from "./summary.js";

export type SummarizeResponse = {
  error?: Error;
  summary?: Summary;
  /**
   * An opaque token that represents this summary in this particular query. To be used for /feedback
   * reporting.
   */
  trackingToken?: string;
};

export const summarizeResponseSchema: Schema<SummarizeResponse> = s.object<SummarizeResponse>({
  error: s.optional(s.lazy(() => errorSchema)),
  summary: s.optional(s.lazy(() => summarySchema)),
  trackingToken: s.optional(s.string()),
});
