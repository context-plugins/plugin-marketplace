import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesStreamContentBlockStartPayloadSchema,
  type MessagesStreamContentBlockStartPayload,
} from "./unions/messages-stream-content-block-start-payload.js";

export type MessagesStreamContentBlockStart = {
  /** The type of the event. @default "content_block_start" */
  type?: "content_block_start";
  /** Index of the content block in the response `content` array. */
  index: number;
  /** Initial content block payload. */
  contentBlock: MessagesStreamContentBlockStartPayload;
};

export const messagesStreamContentBlockStartSchema: Schema<MessagesStreamContentBlockStart> =
  s.object<MessagesStreamContentBlockStart>({
    type: s.defaulted(s.literal("content_block_start"), "content_block_start"),
    index: s.int(),
    contentBlock: messagesStreamContentBlockStartPayloadSchema,
    _keysMap: {
      contentBlock: "content_block",
    },
  });
