import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesReasoningText = {
  /** The type of the reasoning text. Always `reasoning_text`. @default "reasoning_text" */
  type?: "reasoning_text";
  /** The reasoning text from the model. */
  text: string;
};

export const responsesReasoningTextSchema: Schema<ResponsesReasoningText> = s.object<ResponsesReasoningText>({
  type: s.defaulted(s.literal("reasoning_text"), "reasoning_text"),
  text: s.string(),
});
