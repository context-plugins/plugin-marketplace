import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars
 * (star_count DESC), tasks (task_count DESC)
 */
export const SortByHudPlatformTasksetsApi = {
  Starred: "starred",
  Date: "date",
  Name: "name",
  Stars: "stars",
  Tasks: "tasks",
} as const;
export type SortByHudPlatformTasksetsApi =
  | (typeof SortByHudPlatformTasksetsApi)[keyof typeof SortByHudPlatformTasksetsApi]
  | (string & {});

export const sortByHudPlatformTasksetsApiSchema: EnumSchema<SortByHudPlatformTasksetsApi> =
  s.enumOf<SortByHudPlatformTasksetsApi>(SortByHudPlatformTasksetsApi);
