import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHudPlatformTasksApi = {
  Staged: "staged",
  Archived: "archived",
  Failed: "failed",
} as const;
export type StatusHudPlatformTasksApi =
  | (typeof StatusHudPlatformTasksApi)[keyof typeof StatusHudPlatformTasksApi]
  | (string & {});

export const statusHudPlatformTasksApiSchema: EnumSchema<StatusHudPlatformTasksApi> =
  s.enumOf<StatusHudPlatformTasksApi>(StatusHudPlatformTasksApi);
