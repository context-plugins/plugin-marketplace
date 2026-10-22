import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamFunctionCallArgumentsDone = {
  /** The type of the event. @default "response.function_call_arguments.done" */
  type?: "response.function_call_arguments.done";
  /** The ID of the output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The function-call arguments. */
  arguments: string;
  /** The name of the function that was called. */
  name: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamFunctionCallArgumentsDoneSchema: Schema<ResponsesStreamFunctionCallArgumentsDone> =
  s.object<ResponsesStreamFunctionCallArgumentsDone>({
    type: s.defaulted(
      s.literal("response.function_call_arguments.done"),
      "response.function_call_arguments.done",
    ),
    itemId: s.string(),
    outputIndex: s.int(),
    arguments: s.string(),
    name: s.string(),
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  });
