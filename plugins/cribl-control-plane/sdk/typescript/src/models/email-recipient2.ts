import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Email recipient settings for the Notification target. */
export type EmailRecipient2 = {
  /** Bcc: Recipients' email addresses. */
  bcc?: string;
  /** Cc: Recipients' email addresses. */
  cc?: string;
  /** Recipients' email addresses. */
  to: string;
};

export const emailRecipient2Schema: Schema<EmailRecipient2> = s.object<EmailRecipient2>({
  bcc: s.optional(s.string()),
  cc: s.optional(s.string()),
  to: s.string(),
});
