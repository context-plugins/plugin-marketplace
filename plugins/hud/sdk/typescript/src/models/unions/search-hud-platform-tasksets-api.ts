import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ILIKE-match on taskset name */
export type SearchHudPlatformTasksetsApi = string;

export const searchHudPlatformTasksetsApiSchema: Schema<SearchHudPlatformTasksetsApi> =
  s.of<SearchHudPlatformTasksetsApi>(s.union([s.string()]));
