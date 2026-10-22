import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesOutputTextSchema, type ResponsesOutputText } from "../responses-output-text.js";
import { responsesReasoningTextSchema, type ResponsesReasoningText } from "../responses-reasoning-text.js";

/** The content part that was added. */
export type ResponsesContentPart =
  | (ResponsesOutputText & { type: "output_text" })
  | (ResponsesReasoningText & { type: "reasoning_text" });

export const responsesContentPartSchema: Schema<ResponsesContentPart> =
  s.discriminatedUnion<ResponsesContentPart>("type", {
    output_text: responsesOutputTextSchema,
    reasoning_text: responsesReasoningTextSchema,
  });
