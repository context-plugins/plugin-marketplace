import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesTextFormatText = {
  /** The type of response format being defined. Always `text`. @default "text" */
  type?: "text";
};

export const responsesTextFormatTextSchema: Schema<ResponsesTextFormatText> =
  s.object<ResponsesTextFormatText>({
    type: s.defaulted(s.literal("text"), "text"),
  });
