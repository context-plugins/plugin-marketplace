import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feedbackSchema, type Feedback } from "./feedback.js";

export type InsightFeedback = {
  /** The insight feedback ID. */
  id?: string;
  /** The feedback provided by the customer. */
  feedback?: Feedback;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightFeedbackSchema: Schema<InsightFeedback> = s.object<InsightFeedback>(
  {
    id: s.optional(s.string()),
    feedback: s.optional(s.lazy(() => feedbackSchema)),
    _keysMap: {
      id: "Id",
      feedback: "Feedback",
    },
  },
  { additionalProperties: s.json() },
);
