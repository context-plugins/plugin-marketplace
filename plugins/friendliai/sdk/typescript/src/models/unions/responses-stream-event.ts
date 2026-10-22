import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesStreamContentPartAddedSchema,
  type ResponsesStreamContentPartAdded,
} from "../responses-stream-content-part-added.js";
import {
  responsesStreamContentPartDoneSchema,
  type ResponsesStreamContentPartDone,
} from "../responses-stream-content-part-done.js";
import {
  responsesStreamFunctionCallArgumentsDeltaSchema,
  type ResponsesStreamFunctionCallArgumentsDelta,
} from "../responses-stream-function-call-arguments-delta.js";
import {
  responsesStreamFunctionCallArgumentsDoneSchema,
  type ResponsesStreamFunctionCallArgumentsDone,
} from "../responses-stream-function-call-arguments-done.js";
import {
  responsesStreamOutputItemAddedSchema,
  type ResponsesStreamOutputItemAdded,
} from "../responses-stream-output-item-added.js";
import {
  responsesStreamOutputItemDoneSchema,
  type ResponsesStreamOutputItemDone,
} from "../responses-stream-output-item-done.js";
import {
  responsesStreamOutputTextDeltaSchema,
  type ResponsesStreamOutputTextDelta,
} from "../responses-stream-output-text-delta.js";
import {
  responsesStreamOutputTextDoneSchema,
  type ResponsesStreamOutputTextDone,
} from "../responses-stream-output-text-done.js";
import {
  responsesStreamReasoningTextDeltaSchema,
  type ResponsesStreamReasoningTextDelta,
} from "../responses-stream-reasoning-text-delta.js";
import {
  responsesStreamReasoningTextDoneSchema,
  type ResponsesStreamReasoningTextDone,
} from "../responses-stream-reasoning-text-done.js";
import {
  responsesStreamResponseEventSchema,
  type ResponsesStreamResponseEvent,
} from "../responses-stream-response-event.js";

/** A server-sent event containing a streamed Responses API update. */
export type ResponsesStreamEvent =
  | (ResponsesStreamResponseEvent & { type: "response.completed" })
  | (ResponsesStreamContentPartAdded & { type: "response.content_part.added" })
  | (ResponsesStreamContentPartDone & { type: "response.content_part.done" })
  | (ResponsesStreamResponseEvent & { type: "response.created" })
  | (ResponsesStreamResponseEvent & { type: "response.failed" })
  | (ResponsesStreamFunctionCallArgumentsDelta & { type: "response.function_call_arguments.delta" })
  | (ResponsesStreamFunctionCallArgumentsDone & { type: "response.function_call_arguments.done" })
  | (ResponsesStreamResponseEvent & { type: "response.in_progress" })
  | (ResponsesStreamResponseEvent & { type: "response.incomplete" })
  | (ResponsesStreamOutputItemAdded & { type: "response.output_item.added" })
  | (ResponsesStreamOutputItemDone & { type: "response.output_item.done" })
  | (ResponsesStreamOutputTextDelta & { type: "response.output_text.delta" })
  | (ResponsesStreamOutputTextDone & { type: "response.output_text.done" })
  | (ResponsesStreamReasoningTextDelta & { type: "response.reasoning_text.delta" })
  | (ResponsesStreamReasoningTextDone & { type: "response.reasoning_text.done" });

export const responsesStreamEventSchema: Schema<ResponsesStreamEvent> =
  s.discriminatedUnion<ResponsesStreamEvent>("type", {
    "response.completed": responsesStreamResponseEventSchema,
    "response.content_part.added": responsesStreamContentPartAddedSchema,
    "response.content_part.done": responsesStreamContentPartDoneSchema,
    "response.created": responsesStreamResponseEventSchema,
    "response.failed": responsesStreamResponseEventSchema,
    "response.function_call_arguments.delta": responsesStreamFunctionCallArgumentsDeltaSchema,
    "response.function_call_arguments.done": responsesStreamFunctionCallArgumentsDoneSchema,
    "response.in_progress": responsesStreamResponseEventSchema,
    "response.incomplete": responsesStreamResponseEventSchema,
    "response.output_item.added": responsesStreamOutputItemAddedSchema,
    "response.output_item.done": responsesStreamOutputItemDoneSchema,
    "response.output_text.delta": responsesStreamOutputTextDeltaSchema,
    "response.output_text.done": responsesStreamOutputTextDoneSchema,
    "response.reasoning_text.delta": responsesStreamReasoningTextDeltaSchema,
    "response.reasoning_text.done": responsesStreamReasoningTextDoneSchema,
  });
