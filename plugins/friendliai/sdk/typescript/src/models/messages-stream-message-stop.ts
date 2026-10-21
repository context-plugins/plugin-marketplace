import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamMessageStop = {
  /** The type of the event. @default "message_stop" */
  type?: "message_stop";
};

export const messagesStreamMessageStopSchema: Schema<MessagesStreamMessageStop> =
  s.object<MessagesStreamMessageStop>({
    type: s.defaulted(s.literal("message_stop"), "message_stop"),
  });
