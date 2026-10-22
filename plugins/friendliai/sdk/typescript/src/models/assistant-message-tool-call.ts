import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assistantMessageToolCallFunction2Schema,
  type AssistantMessageToolCallFunction2,
} from "./assistant-message-tool-call-function2.js";

export type AssistantMessageToolCall = {
  /** The ID of tool call. */
  id: string;
  /** The type of tool call. @default "function" */
  type?: "function";
  /** The function specification. */
  function: AssistantMessageToolCallFunction2;
};

export const assistantMessageToolCallSchema: Schema<AssistantMessageToolCall> =
  s.object<AssistantMessageToolCall>({
    id: s.string(),
    type: s.defaulted(s.literal("function"), "function"),
    function: assistantMessageToolCallFunction2Schema,
  });
