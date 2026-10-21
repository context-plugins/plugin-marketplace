import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responsesReasoningSummaryTextSchema,
  type ResponsesReasoningSummaryText,
} from "./responses-reasoning-summary-text.js";
import { content8Schema, type Content8 } from "./unions/content8.js";
import { status1Schema, type Status1 } from "./unions/status1.js";

export type ResponsesReasoningItem = {
  /** The type of the object. Always `reasoning`. @default "reasoning" */
  type?: "reasoning";
  /** The unique identifier of the reasoning content. */
  id: string;
  /** Reasoning summary content. */
  summary: ResponsesReasoningSummaryText[];
  /** Reasoning text content. */
  content?: Content8;
  /** The status of the item. One of `in_progress`, `completed`, or `incomplete`. */
  status?: Status1;
};

export const responsesReasoningItemSchema: Schema<ResponsesReasoningItem> = s.object<ResponsesReasoningItem>({
  type: s.defaulted(s.literal("reasoning"), "reasoning"),
  id: s.string(),
  summary: s.array(s.lazy(() => responsesReasoningSummaryTextSchema)),
  content: s.optional(s.lazy(() => content8Schema)),
  status: s.optional(s.lazy(() => status1Schema)),
});
