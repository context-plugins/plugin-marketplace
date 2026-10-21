import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesOutputTextSchema, type ResponsesOutputText } from "../responses-output-text.js";
import { responsesReasoningTextSchema, type ResponsesReasoningText } from "../responses-reasoning-text.js";

/** The completed content part. */
export type ResponsesContentPart1 =
  | (ResponsesOutputText & { type: "output_text" })
  | (ResponsesReasoningText & { type: "reasoning_text" });

export const responsesContentPart1Schema: Schema<ResponsesContentPart1> =
  s.discriminatedUnion<ResponsesContentPart1>("type", {
    output_text: responsesOutputTextSchema,
    reasoning_text: responsesReasoningTextSchema,
  });
