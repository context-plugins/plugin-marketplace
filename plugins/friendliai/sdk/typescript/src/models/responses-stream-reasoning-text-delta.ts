import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamReasoningTextDelta = {
  /** The type of the event. @default "response.reasoning_text.delta" */
  type?: "response.reasoning_text.delta";
  /** The ID of the reasoning output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the reasoning content part. */
  contentIndex: number;
  /** The text delta that was added to the reasoning content. */
  delta: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamReasoningTextDeltaSchema: Schema<ResponsesStreamReasoningTextDelta> =
  s.object<ResponsesStreamReasoningTextDelta>({
    type: s.defaulted(s.literal("response.reasoning_text.delta"), "response.reasoning_text.delta"),
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
