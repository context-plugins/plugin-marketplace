import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReminderRequest = {
  /** The document which the verification is for new reminders and/or update. */
  documentId: string;
  /** The obfuscated id of the person this verification is assigned to. */
  assignee?: string;
  /** Reminder for the next verifications in terms of days. For deletion, this will be omitted. */
  remindInDays?: number;
  /**
   * An optional free-text reason for the reminder. This is particularly useful when a reminder is
   * used to ask for verification from another user (for example, "Duplicate", "Incomplete",
   * "Incorrect").
   */
  reason?: string;
};

export const reminderRequestSchema: Schema<ReminderRequest> = s.object<ReminderRequest>({
  documentId: s.string(),
  assignee: s.optional(s.string()),
  remindInDays: s.optional(s.int()),
  reason: s.optional(s.string()),
});
