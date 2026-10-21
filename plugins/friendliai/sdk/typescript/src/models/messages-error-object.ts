import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesErrorObject = {
  /** Error category. For HTTP 422 in Messages API, this is `invalid_request_error`. */
  type: string;
  /** Human-readable error message. */
  message: string;
};

export const messagesErrorObjectSchema: Schema<MessagesErrorObject> = s.object<MessagesErrorObject>({
  type: s.string(),
  message: s.string(),
});
