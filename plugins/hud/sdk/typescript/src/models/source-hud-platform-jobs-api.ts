import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceHudPlatformJobsApi = {
  System: "system",
  User: "user",
  Agent: "agent",
} as const;
export type SourceHudPlatformJobsApi =
  | (typeof SourceHudPlatformJobsApi)[keyof typeof SourceHudPlatformJobsApi]
  | (string & {});

export const sourceHudPlatformJobsApiSchema: EnumSchema<SourceHudPlatformJobsApi> =
  s.enumOf<SourceHudPlatformJobsApi>(SourceHudPlatformJobsApi);
