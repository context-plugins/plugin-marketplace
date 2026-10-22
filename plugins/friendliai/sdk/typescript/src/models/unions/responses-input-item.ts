import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesCustomToolCallOutputSchema,
  type ResponsesCustomToolCallOutput,
} from "../responses-custom-tool-call-output.js";
import {
  responsesCustomToolCallSchema,
  type ResponsesCustomToolCall,
} from "../responses-custom-tool-call.js";
import {
  responsesFunctionCallOutputSchema,
  type ResponsesFunctionCallOutput,
} from "../responses-function-call-output.js";
import { responsesFunctionCallSchema, type ResponsesFunctionCall } from "../responses-function-call.js";
import { responsesInputMessageSchema, type ResponsesInputMessage } from "../responses-input-message.js";
import { responsesReasoningItemSchema, type ResponsesReasoningItem } from "../responses-reasoning-item.js";

export type ResponsesInputItem =
  | ResponsesInputMessage
  | ResponsesFunctionCall
  | ResponsesFunctionCallOutput
  | ResponsesCustomToolCall
  | ResponsesCustomToolCallOutput
  | ResponsesReasoningItem;

export const responsesInputItemSchema: Schema<ResponsesInputItem> = s.of<ResponsesInputItem>(
  s.union([
    s.lazy(() => responsesInputMessageSchema),
    s.lazy(() => responsesFunctionCallSchema),
    s.lazy(() => responsesFunctionCallOutputSchema),
    s.lazy(() => responsesCustomToolCallSchema),
    s.lazy(() => responsesCustomToolCallOutputSchema),
    s.lazy(() => responsesReasoningItemSchema),
  ]),
);
