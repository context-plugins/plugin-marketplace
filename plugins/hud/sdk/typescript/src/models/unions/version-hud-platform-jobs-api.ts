import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VersionHudPlatformJobsApi = string;

export const versionHudPlatformJobsApiInternalSchema: Schema<VersionHudPlatformJobsApi> =
  s.of<VersionHudPlatformJobsApi>(s.union([s.string()]));

export const versionHudPlatformJobsApiSchema: Schema<VersionHudPlatformJobsApi> = s.lazySchema(() =>
  s.of<VersionHudPlatformJobsApi>(s.union([s.string().check(s.maxLength(255))])),
);
