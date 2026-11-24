import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The fields that will be duplicated to the new task. */
export const IncludeAsanaTasksApi = {
  Notes: "notes",
  Assignee: "assignee",
  Subtasks: "subtasks",
  Attachments: "attachments",
  Tags: "tags",
  Followers: "followers",
  Projects: "projects",
  Dates: "dates",
  Dependencies: "dependencies",
  Parent: "parent",
} as const;
export type IncludeAsanaTasksApi =
  | (typeof IncludeAsanaTasksApi)[keyof typeof IncludeAsanaTasksApi]
  | (string & {});

export const includeAsanaTasksApiSchema: EnumSchema<IncludeAsanaTasksApi> =
  s.enumOf<IncludeAsanaTasksApi>(IncludeAsanaTasksApi);
