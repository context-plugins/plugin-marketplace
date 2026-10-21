import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type Reminder = {
  assignee: Person;
  requestor?: Person;
  /** Unix timestamp for when the reminder should trigger (in seconds since epoch UTC). */
  remindAt: number;
  /** Unix timestamp for when the reminder was first created (in seconds since epoch UTC). */
  createdAt?: number;
  /**
   * An optional free-text reason for the reminder. This is particularly useful when a reminder is
   * used to ask for verification from another user (for example, "Duplicate", "Incomplete",
   * "Incorrect").
   */
  reason?: string;
};

export const reminderSchema: Schema<Reminder> = s.object<Reminder>({
  assignee: personSchema,
  requestor: s.optional(s.lazy(() => personSchema)),
  remindAt: s.int(),
  createdAt: s.optional(s.int()),
  reason: s.optional(s.string()),
});
