import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  versionHudPlatformJobsApiInternalSchema,
  versionHudPlatformJobsApiSchema,
  type VersionHudPlatformJobsApi,
} from "./unions/version-hud-platform-jobs-api.js";

/** The agent that did an imported run. */
export type JobImportAgent = {
  name: string;
  version?: VersionHudPlatformJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobImportAgentProperties: s.Shape<JobImportAgent> = {
  name: s.string(),
  version: s.optional(s.lazy(() => versionHudPlatformJobsApiInternalSchema)),
};

export const jobImportAgentInternalSchema: Schema<JobImportAgent> = s.object<JobImportAgent>(
  jobImportAgentProperties,
  { additionalProperties: s.json() },
);

export const jobImportAgentSchema: Schema<JobImportAgent> = s.lazySchema(() =>
  s.object<JobImportAgent>(
    {
      ...jobImportAgentProperties,
      name: s.string().check(s.minLength(1), s.maxLength(255)),
      version: s.optional(s.lazy(() => versionHudPlatformJobsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
