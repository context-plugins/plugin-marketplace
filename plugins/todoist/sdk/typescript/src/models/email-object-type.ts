import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmailObjectType = {
  Project: "project",
  ProjectComments: "project_comments",
  Task: "task",
} as const;
export type EmailObjectType = (typeof EmailObjectType)[keyof typeof EmailObjectType] | (string & {});

export const emailObjectTypeSchema: EnumSchema<EmailObjectType> = s.enumOf<EmailObjectType>(EmailObjectType);
