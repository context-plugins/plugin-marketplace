import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only
 * be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the
 * top of the section, while the other options will insert at the bottom.
 */
export const AssigneeStatus = {
  Today: "today",
  Upcoming: "upcoming",
  Later: "later",
  New: "new",
  Inbox: "inbox",
} as const;
export type AssigneeStatus = (typeof AssigneeStatus)[keyof typeof AssigneeStatus] | (string & {});

export const assigneeStatusSchema: EnumSchema<AssigneeStatus> = s.enumOf<AssigneeStatus>(AssigneeStatus);
