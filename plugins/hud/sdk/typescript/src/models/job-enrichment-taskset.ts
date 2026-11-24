import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";

export type JobEnrichmentTaskset = {
  id: string;
  name?: NameHudPlatformJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobEnrichmentTasksetSchema: Schema<JobEnrichmentTaskset> = s.object<JobEnrichmentTaskset>(
  {
    id: s.string(),
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
