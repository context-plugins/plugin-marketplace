import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Telemetry recorded server-side alongside the feedback. Always present on append responses. */
export type MessageFeedbackAppendMetrics = {
  /** Milliseconds between message creation and feedback submission. Always present. */
  timeToFeedback: number;
  /** Value of the `User-Agent` request header captured server-side. */
  userAgent?: string;
};

export const messageFeedbackAppendMetricsSchema: Schema<MessageFeedbackAppendMetrics> =
  s.object<MessageFeedbackAppendMetrics>({
    timeToFeedback: s.float64(),
    userAgent: s.optional(s.string()),
  });
