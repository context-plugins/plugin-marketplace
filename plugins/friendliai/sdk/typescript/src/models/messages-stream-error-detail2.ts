import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error payload object. */
export type MessagesStreamErrorDetail2 = {
  /** Error category, such as `invalid_request_error`. */
  type: string;
  /** Human-readable error message. */
  message: string;
};

export const messagesStreamErrorDetail2Schema: Schema<MessagesStreamErrorDetail2> =
  s.object<MessagesStreamErrorDetail2>({
    type: s.string(),
    message: s.string(),
  });
