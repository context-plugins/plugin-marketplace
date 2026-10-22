import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamOutputTextDelta = {
  /** The type of the event. @default "response.output_text.delta" */
  type?: "response.output_text.delta";
  /** The ID of the output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the content part within the output item. */
  contentIndex: number;
  /** The text delta that was added. */
  delta: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamOutputTextDeltaSchema: Schema<ResponsesStreamOutputTextDelta> =
  s.object<ResponsesStreamOutputTextDelta>({
    type: s.defaulted(s.literal("response.output_text.delta"), "response.output_text.delta"),
    itemId: s.string(),
    outputIndex: s.int(),
    contentIndex: s.int(),
    delta: s.string(),
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      contentIndex: "content_index",
      sequenceNumber: "sequence_number",
    },
  });
