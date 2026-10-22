import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesStreamMessageEnvelope2Schema,
  type MessagesStreamMessageEnvelope2,
} from "./messages-stream-message-envelope2.js";

export type MessagesStreamMessageStart = {
  /** The type of the event. @default "message_start" */
  type?: "message_start";
  /** Initial response envelope for this streamed message. */
  message: MessagesStreamMessageEnvelope2;
};

export const messagesStreamMessageStartSchema: Schema<MessagesStreamMessageStart> =
  s.object<MessagesStreamMessageStart>({
    type: s.defaulted(s.literal("message_start"), "message_start"),
    message: messagesStreamMessageEnvelope2Schema,
  });
