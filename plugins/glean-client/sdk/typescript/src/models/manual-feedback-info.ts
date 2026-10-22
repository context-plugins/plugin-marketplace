import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedbackChatExchangeSchema, type FeedbackChatExchange } from "./feedback-chat-exchange.js";
import { issueSchema, type Issue } from "./issue.js";
import { sourceSchema, type Source } from "./source.js";
import { voteSchema, type Vote } from "./vote.js";

export type ManualFeedbackInfo = {
  /**
   * The email address of the user who submitted the Feedback.event.MANUAL_FEEDBACK event.
   *
   * @deprecated
   */
  email?: string;
  /** The source associated with the Feedback.event.MANUAL_FEEDBACK event. */
  source?: Source;
  /**
   * The issue the user indicated in the feedback.
   *
   * @deprecated
   */
  issue?: string;
  /** The issue(s) the user indicated in the feedback. */
  issues?: Issue[];
  /** URLs of images uploaded by user when providing feedback */
  imageUrls?: string[];
  /** The query associated with the Feedback.event.MANUAL_FEEDBACK event. */
  query?: string;
  /**
   * The query associated with the Feedback.event.MANUAL_FEEDBACK event, but obscured such that the
   * vowels are replaced with special characters. For search feedback events only.
   */
  obscuredQuery?: string;
  /**
   * Which tabs the user had chosen at the time of the Feedback.event.MANUAL_FEEDBACK event. For
   * search feedback events only.
   */
  activeTab?: string;
  /** The comments users can optionally add to the Feedback.event.MANUAL_FEEDBACK events. */
  comments?: string;
  /** The array of search result Glean Document IDs, ordered by top to bottom result. */
  searchResults?: string[];
  /** The array of previous messages in a chat session, ordered by oldest to newest. */
  previousMessages?: string[];
  /** Array of previous request/response exchanges, ordered by oldest to newest. */
  chatTranscript?: FeedbackChatExchange[];
  /** How many times this query has been run in the past. */
  numQueriesFromFirstRun?: number;
  /** The vote associated with the Feedback.event.MANUAL_FEEDBACK event. */
  vote?: Vote;
  /**
   * A rating associated with the user feedback. The value will be between one and the maximum given
   * by ratingScale, inclusive.
   */
  rating?: number;
  /**
   * A description of the rating that contextualizes how it appeared to the user, e.g. "satisfied".
   */
  ratingKey?: string;
  /**
   * The scale of comparison for a rating associated with the feedback. Rating values start from one
   * and go up to the maximum specified by ratingScale. For example, a five-option satisfaction
   * rating will have a ratingScale of 5 and a thumbs-up/thumbs-down rating will have a ratingScale
   * of 2.
   */
  ratingScale?: number;
};

export const manualFeedbackInfoSchema: Schema<ManualFeedbackInfo> = s.object<ManualFeedbackInfo>({
  email: s.optional(s.string()),
  source: s.optional(s.lazy(() => sourceSchema)),
  issue: s.optional(s.string()),
  issues: s.optional(s.array(s.lazy(() => issueSchema))),
  imageUrls: s.optional(s.array(s.string())),
  query: s.optional(s.string()),
  obscuredQuery: s.optional(s.string()),
  activeTab: s.optional(s.string()),
  comments: s.optional(s.string()),
  searchResults: s.optional(s.array(s.string())),
  previousMessages: s.optional(s.array(s.string())),
  chatTranscript: s.optional(s.array(s.lazy(() => feedbackChatExchangeSchema))),
  numQueriesFromFirstRun: s.optional(s.int()),
  vote: s.optional(s.lazy(() => voteSchema)),
  rating: s.optional(s.int()),
  ratingKey: s.optional(s.string()),
  ratingScale: s.optional(s.int()),
});
