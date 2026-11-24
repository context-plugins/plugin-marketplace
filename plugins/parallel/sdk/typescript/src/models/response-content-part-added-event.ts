import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOutputTextSchema, type ResponseOutputText } from "./response-output-text.js";

export type ResponseContentPartAddedEvent = {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  /**
   * A text content part of an output message. `annotations` carries the URL citations grounding the
   * answer.
   */
  part: ResponseOutputText;
  sequenceNumber: number;
  /** @default "response.content_part.added" */
  type?: "response.content_part.added";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseContentPartAddedEventSchema: Schema<ResponseContentPartAddedEvent> =
  s.object<ResponseContentPartAddedEvent>(
    {
      contentIndex: s.int(),
      itemId: s.string(),
      outputIndex: s.int(),
      part: responseOutputTextSchema,
      sequenceNumber: s.int(),
      type: s.defaulted(s.literal("response.content_part.added"), "response.content_part.added"),
      _keysMap: {
        contentIndex: "content_index",
        itemId: "item_id",
        outputIndex: "output_index",
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
