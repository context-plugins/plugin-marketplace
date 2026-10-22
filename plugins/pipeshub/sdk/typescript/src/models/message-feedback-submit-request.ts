import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";
import { comments1Schema, type Comments1 } from "./comments1.js";

/**
 * Gateway request body for submitting message feedback (Zod `feedbackBodySchema`). All fields are
 * optional; an empty object is accepted. Matches the first-party chat UI payload shape.
 */
export type MessageFeedbackSubmitRequest = {
  /** Overall helpfulness signal (thumbs up/down). */
  isHelpful?: boolean;
  /** Issue or positive categories that apply to the response. */
  categories?: Category1[];
  /** Free-text comments grouped by sentiment. */
  comments?: Comments1;
};

export const messageFeedbackSubmitRequestSchema: Schema<MessageFeedbackSubmitRequest> =
  s.object<MessageFeedbackSubmitRequest>({
    isHelpful: s.optional(s.boolean()),
    categories: s.optional(s.array(s.lazy(() => category1Schema))),
    comments: s.optional(s.lazy(() => comments1Schema)),
  });
