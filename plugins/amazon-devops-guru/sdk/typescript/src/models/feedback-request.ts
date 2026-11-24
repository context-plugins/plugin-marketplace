import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeedbackRequest = {
  /** The ID of the insight for which the feedback was provided. */
  insightId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feedbackRequestSchema: Schema<FeedbackRequest> = s.object<FeedbackRequest>(
  {
    insightId: s.optional(s.string()),
    _keysMap: {
      insightId: "InsightId",
    },
  },
  { additionalProperties: s.json() },
);
