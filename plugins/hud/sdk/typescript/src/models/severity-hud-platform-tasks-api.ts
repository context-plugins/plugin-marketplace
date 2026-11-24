import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SeverityHudPlatformTasksApi = {
  Error: "error",
  Warning: "warning",
} as const;
export type SeverityHudPlatformTasksApi =
  | (typeof SeverityHudPlatformTasksApi)[keyof typeof SeverityHudPlatformTasksApi]
  | (string & {});

export const severityHudPlatformTasksApiSchema: EnumSchema<SeverityHudPlatformTasksApi> =
  s.enumOf<SeverityHudPlatformTasksApi>(SeverityHudPlatformTasksApi);
