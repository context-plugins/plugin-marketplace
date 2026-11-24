import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOutputTextSchema, type ResponseOutputText } from "./response-output-text.js";

export type ResponseContentPartDoneEvent = {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  /**
   * A text content part of an output message. `annotations` carries the URL citations grounding the
   * answer.
   */
  part: ResponseOutputText;
  sequenceNumber: number;
  /** @default "response.content_part.done" */
  type?: "response.content_part.done";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseContentPartDoneEventSchema: Schema<ResponseContentPartDoneEvent> =
  s.object<ResponseContentPartDoneEvent>(
    {
      contentIndex: s.int(),
      itemId: s.string(),
      outputIndex: s.int(),
      part: responseOutputTextSchema,
      sequenceNumber: s.int(),
      type: s.defaulted(s.literal("response.content_part.done"), "response.content_part.done"),
      _keysMap: {
        contentIndex: "content_index",
        itemId: "item_id",
        outputIndex: "output_index",
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
