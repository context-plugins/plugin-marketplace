import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHudPlatformJobsApi = {
  Completed: "completed",
  Error: "error",
} as const;
export type StatusHudPlatformJobsApi =
  | (typeof StatusHudPlatformJobsApi)[keyof typeof StatusHudPlatformJobsApi]
  | (string & {});

export const statusHudPlatformJobsApiSchema: EnumSchema<StatusHudPlatformJobsApi> =
  s.enumOf<StatusHudPlatformJobsApi>(StatusHudPlatformJobsApi);
