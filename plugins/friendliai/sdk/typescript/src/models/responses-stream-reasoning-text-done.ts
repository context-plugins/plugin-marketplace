import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamReasoningTextDone = {
  /** The type of the event. @default "response.reasoning_text.done" */
  type?: "response.reasoning_text.done";
  /** The ID of the reasoning output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the reasoning content part. */
  contentIndex: number;
  /** The full text of the completed reasoning content. */
  text: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamReasoningTextDoneSchema: Schema<ResponsesStreamReasoningTextDone> =
  s.object<ResponsesStreamReasoningTextDone>({
    type: s.defaulted(s.literal("response.reasoning_text.done"), "response.reasoning_text.done"),
    itemId: s.string(),
    outputIndex: s.int(),
    contentIndex: s.int(),
    text: s.string(),
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      contentIndex: "content_index",
      sequenceNumber: "sequence_number",
    },
  });
