import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesInputImageSchema, type ResponsesInputImage } from "../responses-input-image.js";
import { responsesInputTextSchema, type ResponsesInputText } from "../responses-input-text.js";
import { responsesOutputTextSchema, type ResponsesOutputText } from "../responses-output-text.js";
import { responsesRefusalSchema, type ResponsesRefusal } from "../responses-refusal.js";

export type ResponsesContentBlock =
  | (ResponsesInputImage & { type: "input_image" })
  | (ResponsesInputText & { type: "input_text" })
  | (ResponsesOutputText & { type: "output_text" })
  | (ResponsesRefusal & { type: "refusal" });

export const responsesContentBlockSchema: Schema<ResponsesContentBlock> =
  s.discriminatedUnion<ResponsesContentBlock>("type", {
    input_image: responsesInputImageSchema,
    input_text: responsesInputTextSchema,
    output_text: responsesOutputTextSchema,
    refusal: responsesRefusalSchema,
  });
