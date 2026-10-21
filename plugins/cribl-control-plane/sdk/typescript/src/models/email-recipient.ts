import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmailRecipient = {
  /** Bcc: Recipients' email addresses. */
  bcc?: string;
  /** Cc: Recipients' email addresses. */
  cc?: string;
  /** Recipients' email addresses. */
  to: string;
};

export const emailRecipientSchema: Schema<EmailRecipient> = s.object<EmailRecipient>({
  bcc: s.optional(s.string()),
  cc: s.optional(s.string()),
  to: s.string(),
});
