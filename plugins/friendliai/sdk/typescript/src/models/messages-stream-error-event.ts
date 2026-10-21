import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesStreamErrorDetail2Schema,
  type MessagesStreamErrorDetail2,
} from "./messages-stream-error-detail2.js";
import { requestIdSchema, type RequestId } from "./unions/request-id.js";

export type MessagesStreamErrorEvent = {
  /** The type of the event. @default "error" */
  type?: "error";
  /** Error payload object. */
  error: MessagesStreamErrorDetail2;
  /** Request identifier for debugging and support. */
  requestId?: RequestId;
};

export const messagesStreamErrorEventSchema: Schema<MessagesStreamErrorEvent> =
  s.object<MessagesStreamErrorEvent>({
    type: s.defaulted(s.literal("error"), "error"),
    error: messagesStreamErrorDetail2Schema,
    requestId: s.optional(s.lazy(() => requestIdSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
