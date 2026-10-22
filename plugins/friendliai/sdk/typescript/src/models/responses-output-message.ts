import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesOutputTextSchema, type ResponsesOutputText } from "./responses-output-text.js";
import { status4Schema, type Status4 } from "./status4.js";

export type ResponsesOutputMessage = {
  /** The type of the output message. Always `message`. @default "message" */
  type?: "message";
  /** The unique ID of the output message. */
  id: string;
  /** The role of the output message. Always `assistant`. @default "assistant" */
  role?: "assistant";
  /** The status of the message. One of `in_progress`, `completed`, or `incomplete`. */
  status: Status4;
  /** The content of the output message. */
  content: ResponsesOutputText[];
};

export const responsesOutputMessageSchema: Schema<ResponsesOutputMessage> = s.object<ResponsesOutputMessage>({
  type: s.defaulted(s.literal("message"), "message"),
  id: s.string(),
  role: s.defaulted(s.literal("assistant"), "assistant"),
  status: status4Schema,
  content: s.array(s.lazy(() => responsesOutputTextSchema)),
});
