import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional telemetry captured alongside the feedback */
export type Metrics = {
  /** Time from response delivery to feedback submission */
  timeToFeedback?: number;
  /** Total time the user spent reviewing the response */
  userInteractionTime?: number;
  feedbackSessionId?: string;
  userAgent?: string;
  platform?: string;
};

export const metricsSchema: Schema<Metrics> = s.object<Metrics>({
  timeToFeedback: s.optional(s.float64()),
  userInteractionTime: s.optional(s.float64()),
  feedbackSessionId: s.optional(s.string()),
  userAgent: s.optional(s.string()),
  platform: s.optional(s.string()),
});
