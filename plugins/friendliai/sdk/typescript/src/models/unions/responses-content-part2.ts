import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesOutputTextSchema, type ResponsesOutputText } from "../responses-output-text.js";
import { responsesReasoningTextSchema, type ResponsesReasoningText } from "../responses-reasoning-text.js";

export type ResponsesContentPart2 =
  | (ResponsesOutputText & { type: "output_text" })
  | (ResponsesReasoningText & { type: "reasoning_text" });

export const responsesContentPart2Schema: Schema<ResponsesContentPart2> =
  s.discriminatedUnion<ResponsesContentPart2>("type", {
    output_text: responsesOutputTextSchema,
    reasoning_text: responsesReasoningTextSchema,
  });
