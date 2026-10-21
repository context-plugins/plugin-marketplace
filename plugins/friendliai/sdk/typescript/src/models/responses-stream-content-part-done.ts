import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesContentPart1Schema, type ResponsesContentPart1 } from "./unions/responses-content-part1.js";

export type ResponsesStreamContentPartDone = {
  /** The type of the event. @default "response.content_part.done" */
  type?: "response.content_part.done";
  /** The ID of the output item the content part belongs to. */
  itemId: string;
  /** The index of the output item. */
  outputIndex: number;
  /** The index of the content part within the output item. */
  contentIndex: number;
  /** The completed content part. */
  part: ResponsesContentPart1;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamContentPartDoneSchema: Schema<ResponsesStreamContentPartDone> =
  s.object<ResponsesStreamContentPartDone>({
    type: s.defaulted(s.literal("response.content_part.done"), "response.content_part.done"),
    itemId: s.string(),
    outputIndex: s.int(),
    contentIndex: s.int(),
    part: responsesContentPart1Schema,
    sequenceNumber: s.int(),
    _keysMap: {
      itemId: "item_id",
      outputIndex: "output_index",
      contentIndex: "content_index",
      sequenceNumber: "sequence_number",
    },
  });
