import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesOutputItem1Schema, type ResponsesOutputItem1 } from "./unions/responses-output-item1.js";

export type ResponsesStreamOutputItemAdded = {
  /** The type of the event. @default "response.output_item.added" */
  type?: "response.output_item.added";
  /** The index of the output item that was added. */
  outputIndex: number;
  /** The output item that was added. */
  item: ResponsesOutputItem1;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamOutputItemAddedSchema: Schema<ResponsesStreamOutputItemAdded> =
  s.object<ResponsesStreamOutputItemAdded>({
    type: s.defaulted(s.literal("response.output_item.added"), "response.output_item.added"),
    outputIndex: s.int(),
    item: responsesOutputItem1Schema,
    sequenceNumber: s.int(),
    _keysMap: {
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  });
