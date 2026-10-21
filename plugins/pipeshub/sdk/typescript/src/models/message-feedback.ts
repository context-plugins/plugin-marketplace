import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";
import { citationFeedbackSchema, type CitationFeedback } from "./citation-feedback.js";
import { commentsSchema, type Comments } from "./comments.js";
import { metricsSchema, type Metrics } from "./metrics.js";
import { ratingsSchema, type Ratings } from "./ratings.js";
import { revisionSchema, type Revision } from "./revision.js";
import { Source, sourceSchema } from "./source.js";

/**
 * Comprehensive feedback on an AI response. Feedback helps improve the AI's performance and
 * response quality over time.
 */
export type MessageFeedback = {
  /** Overall helpfulness rating */
  isHelpful?: boolean;
  ratings?: Ratings;
  /** Categories of issues or positive attributes identified */
  categories?: Category1[];
  comments?: Comments;
  /** Feedback on individual citations */
  citationFeedback?: CitationFeedback[];
  /** Were the suggested follow-up questions helpful */
  followUpQuestionsHelpful?: boolean;
  /** Follow-up questions that were suggested but not used by the user */
  unusedFollowUpQuestions?: string[];
  /**
   * Origin of the feedback. Always present in responses (server applies the default `user`).
   *
   * @default Source.User
   */
  source?: Source;
  /** User who submitted the feedback */
  feedbackProvider?: string;
  /**
   * Time the feedback was created, stored as a Number (epoch milliseconds) with a server-side
   * default of `Date.now`, so always present in responses. Not an ISO 8601 datetime.
   */
  timestamp?: number;
  /** Audit trail of edits to this feedback entry */
  revisions?: Revision[];
  /** Optional telemetry captured alongside the feedback */
  metrics?: Metrics;
};

export const messageFeedbackSchema: Schema<MessageFeedback> = s.object<MessageFeedback>({
  isHelpful: s.optional(s.boolean()),
  ratings: s.optional(s.lazy(() => ratingsSchema)),
  categories: s.optional(s.array(s.lazy(() => category1Schema))),
  comments: s.optional(s.lazy(() => commentsSchema)),
  citationFeedback: s.optional(s.array(s.lazy(() => citationFeedbackSchema))),
  followUpQuestionsHelpful: s.optional(s.boolean()),
  unusedFollowUpQuestions: s.optional(s.array(s.string())),
  source: s.defaulted(sourceSchema, Source.User),
  feedbackProvider: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  revisions: s.optional(s.array(s.lazy(() => revisionSchema))),
  metrics: s.optional(s.lazy(() => metricsSchema)),
});
