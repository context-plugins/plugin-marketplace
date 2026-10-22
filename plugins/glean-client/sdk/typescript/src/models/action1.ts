import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action for the activity */
export const Action1 = {
  Add: "ADD",
  AddReminder: "ADD_REMINDER",
  Click: "CLICK",
  Comment: "COMMENT",
  Delete: "DELETE",
  Dismiss: "DISMISS",
  Edit: "EDIT",
  Mention: "MENTION",
  Move: "MOVE",
  Other: "OTHER",
  Restore: "RESTORE",
  Unknown: "UNKNOWN",
  Verify: "VERIFY",
  View: "VIEW",
} as const;
export type Action1 = (typeof Action1)[keyof typeof Action1] | (string & {});

export const action1Schema: EnumSchema<Action1> = s.enumOf<Action1>(Action1);
