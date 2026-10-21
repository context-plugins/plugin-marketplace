import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesStreamMessageDeltaPayload2Schema,
  type MessagesStreamMessageDeltaPayload2,
} from "./messages-stream-message-delta-payload2.js";
import { usage3Schema, type Usage3 } from "./unions/usage3.js";

export type MessagesStreamMessageDelta = {
  /** The type of the event. @default "message_delta" */
  type?: "message_delta";
  /** Final message-level delta. */
  delta: MessagesStreamMessageDeltaPayload2;
  /** Usage delta object that may be emitted near stream completion. */
  usage?: Usage3;
};

export const messagesStreamMessageDeltaSchema: Schema<MessagesStreamMessageDelta> =
  s.object<MessagesStreamMessageDelta>({
    type: s.defaulted(s.literal("message_delta"), "message_delta"),
    delta: messagesStreamMessageDeltaPayload2Schema,
    usage: s.optional(s.lazy(() => usage3Schema)),
  });
