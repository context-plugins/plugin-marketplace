import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseFormatText = {
  /** The type of the response format: `text`. @default "text" */
  type?: "text";
};

export const responseFormatTextSchema: Schema<ResponseFormatText> = s.object<ResponseFormatText>({
  type: s.defaulted(s.literal("text"), "text"),
});
