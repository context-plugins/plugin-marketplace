import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesReasoningSummaryText = {
  /** The type of the object. Always `summary_text`. @default "summary_text" */
  type?: "summary_text";
  /** A summary of the reasoning output from the model so far. */
  text: string;
};

export const responsesReasoningSummaryTextSchema: Schema<ResponsesReasoningSummaryText> =
  s.object<ResponsesReasoningSummaryText>({
    type: s.defaulted(s.literal("summary_text"), "summary_text"),
    text: s.string(),
  });
