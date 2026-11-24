import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ErrorHudPlatformJobsApi = string;

export const errorHudPlatformJobsApiInternalSchema: Schema<ErrorHudPlatformJobsApi> =
  s.of<ErrorHudPlatformJobsApi>(s.union([s.string()]));

export const errorHudPlatformJobsApiSchema: Schema<ErrorHudPlatformJobsApi> = s.lazySchema(() =>
  s.of<ErrorHudPlatformJobsApi>(s.union([s.string().check(s.maxLength(4000))])),
);
