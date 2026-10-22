import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ratingSchema, type Rating } from "./unions/rating.js";
import { summarySchema, type Summary } from "./unions/summary.js";

/** AI summary information for a given session. */
export type SessionSummaryResponse = {
  /** The AI summary of the session */
  summary?: Summary;
  /** The AI rating of the session */
  rating?: Rating;
};

export const sessionSummaryResponseSchema: Schema<SessionSummaryResponse> = s.object<SessionSummaryResponse>({
  summary: s.optional(s.lazy(() => summarySchema)),
  rating: s.optional(s.lazy(() => ratingSchema)),
});
