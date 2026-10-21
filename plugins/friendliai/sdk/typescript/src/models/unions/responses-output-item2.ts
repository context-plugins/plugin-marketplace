import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesFunctionCallSchema, type ResponsesFunctionCall } from "../responses-function-call.js";
import { responsesOutputMessageSchema, type ResponsesOutputMessage } from "../responses-output-message.js";
import { responsesReasoningItemSchema, type ResponsesReasoningItem } from "../responses-reasoning-item.js";

/** The completed output item. */
export type ResponsesOutputItem2 =
  | (ResponsesFunctionCall & { type: "function_call" })
  | (ResponsesOutputMessage & { type: "message" })
  | (ResponsesReasoningItem & { type: "reasoning" });

export const responsesOutputItem2Schema: Schema<ResponsesOutputItem2> =
  s.discriminatedUnion<ResponsesOutputItem2>("type", {
    function_call: responsesFunctionCallSchema,
    message: responsesOutputMessageSchema,
    reasoning: responsesReasoningItemSchema,
  });
