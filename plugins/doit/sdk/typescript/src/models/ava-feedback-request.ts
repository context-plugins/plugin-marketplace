import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feedbackSchema, type Feedback } from "./feedback.js";

export type AvaFeedbackRequest = {
  /** The conversation ID the feedback relates to. */
  conversationId: string;
  /** The specific answer ID within the conversation. */
  answerId: string;
  feedback: Feedback;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const avaFeedbackRequestSchema: Schema<AvaFeedbackRequest> = s.object<AvaFeedbackRequest>(
  {
    conversationId: s.string(),
    answerId: s.string(),
    feedback: feedbackSchema,
  },
  { additionalProperties: s.json() },
);
