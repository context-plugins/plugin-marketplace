import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NameHudPlatformJobsApi = string;

export const nameHudPlatformJobsApiSchema: Schema<NameHudPlatformJobsApi> = s.of<NameHudPlatformJobsApi>(
  s.union([s.string()]),
);
