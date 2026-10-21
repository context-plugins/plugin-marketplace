import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";
import { comments2Schema, type Comments2 } from "./comments2.js";
import {
  messageFeedbackAppendMetricsSchema,
  type MessageFeedbackAppendMetrics,
} from "./message-feedback-append-metrics.js";

/**
 * The feedback entry just appended to the message. Echoes the fields supplied in the request plus
 * server-stamped `feedbackProvider`, `timestamp`, and `metrics`.
 */
export type MessageFeedbackAppendEntry = {
  /** Echoed from the request when supplied. */
  isHelpful?: boolean;
  /** Echoed categories from the request. */
  categories?: Category1[];
  /** Echoed free-text comments from the request. */
  comments?: Comments2;
  /** User who submitted the feedback. Always present. */
  feedbackProvider: string;
  /** Submission time as epoch milliseconds (not an ISO 8601 datetime). Always present. */
  timestamp: number;
  /** Telemetry recorded server-side alongside the feedback. Always present on append responses. */
  metrics: MessageFeedbackAppendMetrics;
};

export const messageFeedbackAppendEntrySchema: Schema<MessageFeedbackAppendEntry> =
  s.object<MessageFeedbackAppendEntry>({
    isHelpful: s.optional(s.boolean()),
    categories: s.optional(s.array(s.lazy(() => category1Schema))),
    comments: s.optional(s.lazy(() => comments2Schema)),
    feedbackProvider: s.string(),
    timestamp: s.int(),
    metrics: messageFeedbackAppendMetricsSchema,
  });
