import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesErrorObject1Schema, type MessagesErrorObject1 } from "./messages-error-object1.js";
import { requestId1Schema, type RequestId1 } from "./unions/request-id1.js";

export type MessagesErrorResponse = {
  /** Top-level response type for Messages API errors. @default "error" */
  type?: "error";
  /** Structured error object. */
  error: MessagesErrorObject1;
  /** Request identifier for debugging and support. It may be omitted in some failure paths. */
  requestId?: RequestId1;
};

export const messagesErrorResponseSchema: Schema<MessagesErrorResponse> = s.object<MessagesErrorResponse>({
  type: s.defaulted(s.literal("error"), "error"),
  error: messagesErrorObject1Schema,
  requestId: s.optional(s.lazy(() => requestId1Schema)),
  _keysMap: {
    requestId: "request_id",
  },
});
