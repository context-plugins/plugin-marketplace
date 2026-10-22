import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamErrorDetail = {
  /** Error category, such as `invalid_request_error`. */
  type: string;
  /** Human-readable error message. */
  message: string;
};

export const messagesStreamErrorDetailSchema: Schema<MessagesStreamErrorDetail> =
  s.object<MessagesStreamErrorDetail>({
    type: s.string(),
    message: s.string(),
  });
