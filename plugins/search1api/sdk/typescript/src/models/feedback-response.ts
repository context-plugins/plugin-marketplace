import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeedbackResponse = {
  id: string;
  /** @default "new" */
  status?: "new";
};

const feedbackResponseProperties: s.Shape<FeedbackResponse> = {
  id: s.string(),
  status: s.defaulted(s.literal("new"), "new"),
};

export const feedbackResponseInternalSchema: Schema<FeedbackResponse> =
  s.object<FeedbackResponse>(feedbackResponseProperties);

export const feedbackResponseSchema: Schema<FeedbackResponse> = s.lazySchema(() =>
  s.object<FeedbackResponse>({
    ...feedbackResponseProperties,
    id: s.string().check(s.maxLength(80), s.pattern("^fb_[a-zA-Z0-9_-]+$")),
  }),
);
