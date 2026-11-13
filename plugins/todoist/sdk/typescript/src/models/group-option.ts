import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupOption = {
  Assignee: "ASSIGNEE",
  AddedDate: "ADDED_DATE",
  DueDate: "DUE_DATE",
  Label: "LABEL",
  Priority: "PRIORITY",
  Project: "PROJECT",
  Workspace: "WORKSPACE",
  Deadline: "DEADLINE",
} as const;
export type GroupOption = (typeof GroupOption)[keyof typeof GroupOption] | (string & {});

export const groupOptionSchema: EnumSchema<GroupOption> = s.enumOf<GroupOption>(GroupOption);
