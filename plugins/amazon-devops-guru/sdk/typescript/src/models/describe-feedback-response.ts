import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightFeedbackSchema, type InsightFeedback } from "./insight-feedback.js";

export type DescribeFeedbackResponse = {
  insightFeedback?: InsightFeedback;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFeedbackResponseSchema: Schema<DescribeFeedbackResponse> =
  s.object<DescribeFeedbackResponse>(
    {
      insightFeedback: s.optional(s.lazy(() => insightFeedbackSchema)),
      _keysMap: {
        insightFeedback: "InsightFeedback",
      },
    },
    { additionalProperties: s.json() },
  );
