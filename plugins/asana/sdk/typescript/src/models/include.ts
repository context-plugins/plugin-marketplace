import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The elements that will be duplicated to the new project. Tasks are always included. */
export const Include = {
  Members: "members",
  Notes: "notes",
  Forms: "forms",
  TaskNotes: "task_notes",
  TaskAssignee: "task_assignee",
  TaskSubtasks: "task_subtasks",
  TaskAttachments: "task_attachments",
  TaskDates: "task_dates",
  TaskDependencies: "task_dependencies",
  TaskFollowers: "task_followers",
  TaskTags: "task_tags",
  TaskProjects: "task_projects",
} as const;
export type Include = (typeof Include)[keyof typeof Include] | (string & {});

export const includeSchema: EnumSchema<Include> = s.enumOf<Include>(Include);
