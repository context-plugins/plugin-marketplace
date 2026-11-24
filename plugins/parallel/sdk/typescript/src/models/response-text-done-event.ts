import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logprob2Schema, type Logprob2 } from "./logprob2.js";

/** Emitted when text content is finalized. */
export type ResponseTextDoneEvent = {
  contentIndex: number;
  itemId: string;
  logprobs: Logprob2[];
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  /** @default "response.output_text.done" */
  type?: "response.output_text.done";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTextDoneEventSchema: Schema<ResponseTextDoneEvent> = s.object<ResponseTextDoneEvent>(
  {
    contentIndex: s.int(),
    itemId: s.string(),
    logprobs: s.array(s.lazy(() => logprob2Schema)),
    outputIndex: s.int(),
    sequenceNumber: s.int(),
    text: s.string(),
    type: s.defaulted(s.literal("response.output_text.done"), "response.output_text.done"),
    _keysMap: {
      contentIndex: "content_index",
      itemId: "item_id",
      outputIndex: "output_index",
      sequenceNumber: "sequence_number",
    },
  },
  { additionalProperties: s.json() },
);
