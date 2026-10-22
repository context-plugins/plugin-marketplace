import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesStreamContentBlockDeltaPayloadSchema,
  type MessagesStreamContentBlockDeltaPayload,
} from "./unions/messages-stream-content-block-delta-payload.js";

export type MessagesStreamContentBlockDelta = {
  /** The type of the event. @default "content_block_delta" */
  type?: "content_block_delta";
  /** Index of the content block being updated. */
  index: number;
  /** Incremental delta payload. */
  delta: MessagesStreamContentBlockDeltaPayload;
};

export const messagesStreamContentBlockDeltaSchema: Schema<MessagesStreamContentBlockDelta> =
  s.object<MessagesStreamContentBlockDelta>({
    type: s.defaulted(s.literal("content_block_delta"), "content_block_delta"),
    index: s.int(),
    delta: messagesStreamContentBlockDeltaPayloadSchema,
  });
