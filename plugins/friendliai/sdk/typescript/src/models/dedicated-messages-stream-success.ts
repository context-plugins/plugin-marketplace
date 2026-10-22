import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesStreamEventSchema, type MessagesStreamEvent } from "./unions/messages-stream-event.js";

export type DedicatedMessagesStreamSuccess = {
  /** A server-sent event containing a streamed Messages API update. */
  data: MessagesStreamEvent;
};

export const dedicatedMessagesStreamSuccessSchema: Schema<DedicatedMessagesStreamSuccess> =
  s.object<DedicatedMessagesStreamSuccess>({
    data: messagesStreamEventSchema,
  });
