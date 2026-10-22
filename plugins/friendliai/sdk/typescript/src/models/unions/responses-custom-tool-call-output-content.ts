import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesInputImageSchema, type ResponsesInputImage } from "../responses-input-image.js";
import { responsesInputTextSchema, type ResponsesInputText } from "../responses-input-text.js";

export type ResponsesCustomToolCallOutputContent =
  | (ResponsesInputImage & { type: "input_image" })
  | (ResponsesInputText & { type: "input_text" });

export const responsesCustomToolCallOutputContentSchema: Schema<ResponsesCustomToolCallOutputContent> =
  s.discriminatedUnion<ResponsesCustomToolCallOutputContent>("type", {
    input_image: responsesInputImageSchema,
    input_text: responsesInputTextSchema,
  });
