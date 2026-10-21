import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Structured error object. */
export type MessagesErrorObject1 = {
  /** Error category. For HTTP 422 in Messages API, this is `invalid_request_error`. */
  type: string;
  /** Human-readable error message. */
  message: string;
};

export const messagesErrorObject1Schema: Schema<MessagesErrorObject1> = s.object<MessagesErrorObject1>({
  type: s.string(),
  message: s.string(),
});
