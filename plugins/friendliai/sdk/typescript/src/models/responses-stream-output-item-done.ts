import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesOutputItem2Schema, type ResponsesOutputItem2 } from "./unions/responses-output-item2.js";

export type ResponsesStreamOutputItemDone = {
  /** The type of the event. @default "response.output_item.done" */
  type?: "response.output_item.done";
  /** The index of the output item that was marked done. */
  outputIndex: number;
  /** The completed output item. */
  item: ResponsesOutputItem2;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamOutputItemDoneSchema: Schema<ResponsesStreamOutputItemDone> =
  s.object<ResponsesStreamOutputItemDone>({
    type: s.defaulted(s.literal("response.output_item.done"), "response.output_item.done"),
    outputIndex: s.int(),
    item: responsesOutputItem2Schema,
    sequenceNumber: s.int(),
    _keysMap: {
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  });
