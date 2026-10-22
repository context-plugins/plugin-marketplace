import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesOutputText = {
  /** The type of the output text. Always `output_text`. @default "output_text" */
  type?: "output_text";
  /** The text output from the model. */
  text: string;
};

export const responsesOutputTextSchema: Schema<ResponsesOutputText> = s.object<ResponsesOutputText>({
  type: s.defaulted(s.literal("output_text"), "output_text"),
  text: s.string(),
});
