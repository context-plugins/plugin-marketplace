import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logprob2Schema, type Logprob2 } from "./logprob2.js";

/** Emitted when there is an additional text delta. */
export type ResponseTextDeltaEvent = {
  contentIndex: number;
  delta: string;
  itemId: string;
  logprobs: Logprob2[];
  outputIndex: number;
  sequenceNumber: number;
  /** @default "response.output_text.delta" */
  type?: "response.output_text.delta";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTextDeltaEventSchema: Schema<ResponseTextDeltaEvent> = s.object<ResponseTextDeltaEvent>(
  {
    contentIndex: s.int(),
    delta: s.string(),
    itemId: s.string(),
    logprobs: s.array(s.lazy(() => logprob2Schema)),
    outputIndex: s.int(),
    sequenceNumber: s.int(),
    type: s.defaulted(s.literal("response.output_text.delta"), "response.output_text.delta"),
    _keysMap: {
      contentIndex: "content_index",
      itemId: "item_id",
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  },
  { additionalProperties: s.json() },
);
