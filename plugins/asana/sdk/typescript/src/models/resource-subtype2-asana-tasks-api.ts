import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceSubtype2AsanaTasksApi = {
  DefaultTask: "default_task",
  Milestone: "milestone",
} as const;
export type ResourceSubtype2AsanaTasksApi =
  | (typeof ResourceSubtype2AsanaTasksApi)[keyof typeof ResourceSubtype2AsanaTasksApi]
  | (string & {});

export const resourceSubtype2AsanaTasksApiSchema: EnumSchema<ResourceSubtype2AsanaTasksApi> =
  s.enumOf<ResourceSubtype2AsanaTasksApi>(ResourceSubtype2AsanaTasksApi);
