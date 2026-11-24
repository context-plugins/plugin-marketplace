import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceTypeAsanaUsersApi = {
  Portfolio: "portfolio",
  Project: "project",
  Tag: "tag",
  Task: "task",
  User: "user",
  ProjectTemplate: "project_template",
} as const;
export type ResourceTypeAsanaUsersApi =
  | (typeof ResourceTypeAsanaUsersApi)[keyof typeof ResourceTypeAsanaUsersApi]
  | (string & {});

export const resourceTypeAsanaUsersApiSchema: EnumSchema<ResourceTypeAsanaUsersApi> =
  s.enumOf<ResourceTypeAsanaUsersApi>(ResourceTypeAsanaUsersApi);
