import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamContentBlockStop = {
  /** The type of the event. @default "content_block_stop" */
  type?: "content_block_stop";
  /** Index of the block that has finished streaming. */
  index: number;
};

export const messagesStreamContentBlockStopSchema: Schema<MessagesStreamContentBlockStop> =
  s.object<MessagesStreamContentBlockStop>({
    type: s.defaulted(s.literal("content_block_stop"), "content_block_stop"),
    index: s.int(),
  });
