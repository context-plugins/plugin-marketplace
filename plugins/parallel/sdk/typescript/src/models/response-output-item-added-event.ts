import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOutputMessageSchema, type ResponseOutputMessage } from "./response-output-message.js";

export type ResponseOutputItemAddedEvent = {
  /** An assistant message produced by the model. */
  item: ResponseOutputMessage;
  outputIndex: number;
  sequenceNumber: number;
  /** @default "response.output_item.added" */
  type?: "response.output_item.added";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOutputItemAddedEventSchema: Schema<ResponseOutputItemAddedEvent> =
  s.object<ResponseOutputItemAddedEvent>(
    {
      item: responseOutputMessageSchema,
      outputIndex: s.int(),
      sequenceNumber: s.int(),
      type: s.defaulted(s.literal("response.output_item.added"), "response.output_item.added"),
      _keysMap: {
        outputIndex: "output_index",
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
