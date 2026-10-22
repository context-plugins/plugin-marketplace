import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesStreamFunctionCallArgumentsDelta = {
  /** The type of the event. @default "response.function_call_arguments.delta" */
  type?: "response.function_call_arguments.delta";
  /** The ID of the output item. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The function-call arguments delta that is added. */
  delta: string;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamFunctionCallArgumentsDeltaSchema: Schema<ResponsesStreamFunctionCallArgumentsDelta> =
  s.object<ResponsesStreamFunctionCallArgumentsDelta>({
    type: s.defaulted(
      s.literal("response.function_call_arguments.delta"),
      "response.function_call_arguments.delta",
    ),
    itemId: s.string(),
    outputIndex: s.int(),
    delta: s.string(),
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  });
