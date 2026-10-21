import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { emailRecipient2Schema, type EmailRecipient2 } from "./email-recipient2.js";

export type NotificationSmtpTargetConfig = {
  /** Email body. */
  body?: string;
  /** Email recipient settings for the Notification target. */
  emailRecipient: EmailRecipient2;
  /** Email subject. */
  subject?: string;
};

export const notificationSmtpTargetConfigSchema: Schema<NotificationSmtpTargetConfig> =
  s.object<NotificationSmtpTargetConfig>({
    body: s.optional(s.string()),
    emailRecipient: emailRecipient2Schema,
    subject: s.optional(s.string()),
  });
