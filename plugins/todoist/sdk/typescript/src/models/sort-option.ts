import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortOption = {
  Alphabetically: "ALPHABETICALLY",
  Assignee: "ASSIGNEE",
  AddedDate: "ADDED_DATE",
  DueDate: "DUE_DATE",
  Label: "LABEL",
  Priority: "PRIORITY",
  Project: "PROJECT",
  Workspace: "WORKSPACE",
  Manual: "MANUAL",
  Deadline: "DEADLINE",
} as const;
export type SortOption = (typeof SortOption)[keyof typeof SortOption] | (string & {});

export const sortOptionSchema: EnumSchema<SortOption> = s.enumOf<SortOption>(SortOption);
