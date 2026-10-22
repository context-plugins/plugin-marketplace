import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesContentPartSchema, type ResponsesContentPart } from "./unions/responses-content-part.js";

export type ResponsesStreamContentPartAdded = {
  /** The type of the event. @default "response.content_part.added" */
  type?: "response.content_part.added";
  /** The ID of the output item the content part was added to. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the content part within the output item. */
  contentIndex: number;
  /** The content part that was added. */
  part: ResponsesContentPart;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamContentPartAddedSchema: Schema<ResponsesStreamContentPartAdded> =
  s.object<ResponsesStreamContentPartAdded>({
    type: s.defaulted(s.literal("response.content_part.added"), "response.content_part.added"),
    itemId: s.string(),
    outputIndex: s.int(),
    contentIndex: s.int(),
    part: responsesContentPartSchema,
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      contentIndex: "content_index",
      sequenceNumber: "sequence_number",
    },
  });
