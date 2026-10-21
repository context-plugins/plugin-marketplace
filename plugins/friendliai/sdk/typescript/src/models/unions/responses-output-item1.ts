import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesFunctionCallSchema, type ResponsesFunctionCall } from "../responses-function-call.js";
import { responsesOutputMessageSchema, type ResponsesOutputMessage } from "../responses-output-message.js";
import { responsesReasoningItemSchema, type ResponsesReasoningItem } from "../responses-reasoning-item.js";

/** The output item that was added. */
export type ResponsesOutputItem1 =
  | (ResponsesFunctionCall & { type: "function_call" })
  | (ResponsesOutputMessage & { type: "message" })
  | (ResponsesReasoningItem & { type: "reasoning" });

export const responsesOutputItem1Schema: Schema<ResponsesOutputItem1> =
  s.discriminatedUnion<ResponsesOutputItem1>("type", {
    function_call: responsesFunctionCallSchema,
    message: responsesOutputMessageSchema,
    reasoning: responsesReasoningItemSchema,
  });
