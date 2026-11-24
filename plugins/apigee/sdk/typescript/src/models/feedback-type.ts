import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type of feedback being submitted. */
export const FeedbackType = {
  FeedbackTypeUnspecified: "FEEDBACK_TYPE_UNSPECIFIED",
  ExcludedDetection: "EXCLUDED_DETECTION",
} as const;
export type FeedbackType = (typeof FeedbackType)[keyof typeof FeedbackType] | (string & {});

export const feedbackTypeSchema: EnumSchema<FeedbackType> = s.enumOf<FeedbackType>(FeedbackType);
