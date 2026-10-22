import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AI-suggested follow-up question */
export type FollowUpQuestion = {
  /** The suggested question text */
  question?: string;
  /** Confidence level for this suggestion */
  confidence?: string;
  /** Why this question might be relevant */
  reasoning?: string;
};

export const followUpQuestionSchema: Schema<FollowUpQuestion> = s.object<FollowUpQuestion>({
  question: s.optional(s.string()),
  confidence: s.optional(s.string()),
  reasoning: s.optional(s.string()),
});
