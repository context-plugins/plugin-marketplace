import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesInputText = {
  /** The type of the input item. Always `input_text`. @default "input_text" */
  type?: "input_text";
  /** The text input to the model. */
  text: string;
};

export const responsesInputTextSchema: Schema<ResponsesInputText> = s.object<ResponsesInputText>({
  type: s.defaulted(s.literal("input_text"), "input_text"),
  text: s.string(),
});
