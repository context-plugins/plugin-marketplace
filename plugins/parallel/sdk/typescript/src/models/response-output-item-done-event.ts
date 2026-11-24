import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOutputMessageSchema, type ResponseOutputMessage } from "./response-output-message.js";

export type ResponseOutputItemDoneEvent = {
  /** An assistant message produced by the model. */
  item: ResponseOutputMessage;
  outputIndex: number;
  sequenceNumber: number;
  /** @default "response.output_item.done" */
  type?: "response.output_item.done";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOutputItemDoneEventSchema: Schema<ResponseOutputItemDoneEvent> =
  s.object<ResponseOutputItemDoneEvent>(
    {
      item: responseOutputMessageSchema,
      outputIndex: s.int(),
      sequenceNumber: s.int(),
      type: s.defaulted(s.literal("response.output_item.done"), "response.output_item.done"),
      _keysMap: {
        outputIndex: "output_index",
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
