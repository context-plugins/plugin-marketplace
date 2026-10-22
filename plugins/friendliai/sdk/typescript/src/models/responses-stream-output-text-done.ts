import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamOutputTextDone = {
  /** The type of the event. @default "response.output_text.done" */
  type?: "response.output_text.done";
  /** The ID of the output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the content part within the output item. */
  contentIndex: number;
  /** The text content that was added. */
  text: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamOutputTextDoneSchema: Schema<ResponsesStreamOutputTextDone> =
  s.object<ResponsesStreamOutputTextDone>({
    type: s.defaulted(s.literal("response.output_text.done"), "response.output_text.done"),
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
