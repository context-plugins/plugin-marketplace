import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesFunctionCallSchema, type ResponsesFunctionCall } from "../responses-function-call.js";
import { responsesOutputMessageSchema, type ResponsesOutputMessage } from "../responses-output-message.js";
import { responsesReasoningItemSchema, type ResponsesReasoningItem } from "../responses-reasoning-item.js";

export type ResponsesOutputItem =
  | (ResponsesFunctionCall & { type: "function_call" })
  | (ResponsesOutputMessage & { type: "message" })
  | (ResponsesReasoningItem & { type: "reasoning" });

export const responsesOutputItemSchema: Schema<ResponsesOutputItem> =
  s.discriminatedUnion<ResponsesOutputItem>("type", {
    function_call: responsesFunctionCallSchema,
    message: responsesOutputMessageSchema,
    reasoning: responsesReasoningItemSchema,
  });
