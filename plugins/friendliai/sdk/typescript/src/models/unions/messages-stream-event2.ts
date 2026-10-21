import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesStreamContentBlockDeltaSchema,
  type MessagesStreamContentBlockDelta,
} from "../messages-stream-content-block-delta.js";
import {
  messagesStreamContentBlockStartSchema,
  type MessagesStreamContentBlockStart,
} from "../messages-stream-content-block-start.js";
import {
  messagesStreamContentBlockStopSchema,
  type MessagesStreamContentBlockStop,
} from "../messages-stream-content-block-stop.js";
import {
  messagesStreamErrorEventSchema,
  type MessagesStreamErrorEvent,
} from "../messages-stream-error-event.js";
import {
  messagesStreamMessageDeltaSchema,
  type MessagesStreamMessageDelta,
} from "../messages-stream-message-delta.js";
import {
  messagesStreamMessageStartSchema,
  type MessagesStreamMessageStart,
} from "../messages-stream-message-start.js";
import {
  messagesStreamMessageStopSchema,
  type MessagesStreamMessageStop,
} from "../messages-stream-message-stop.js";

export type MessagesStreamEvent2 =
  | (MessagesStreamContentBlockDelta & { type: "content_block_delta" })
  | (MessagesStreamContentBlockStart & { type: "content_block_start" })
  | (MessagesStreamContentBlockStop & { type: "content_block_stop" })
  | (MessagesStreamErrorEvent & { type: "error" })
  | (MessagesStreamMessageDelta & { type: "message_delta" })
  | (MessagesStreamMessageStart & { type: "message_start" })
  | (MessagesStreamMessageStop & { type: "message_stop" });

export const messagesStreamEvent2Schema: Schema<MessagesStreamEvent2> =
  s.discriminatedUnion<MessagesStreamEvent2>("type", {
    content_block_delta: messagesStreamContentBlockDeltaSchema,
    content_block_start: messagesStreamContentBlockStartSchema,
    content_block_stop: messagesStreamContentBlockStopSchema,
    error: messagesStreamErrorEventSchema,
    message_delta: messagesStreamMessageDeltaSchema,
    message_start: messagesStreamMessageStartSchema,
    message_stop: messagesStreamMessageStopSchema,
  });
