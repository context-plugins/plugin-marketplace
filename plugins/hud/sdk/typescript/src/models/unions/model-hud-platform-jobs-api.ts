import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { jobEntityRefSchema, type JobEntityRef } from "../job-entity-ref.js";

export type ModelHudPlatformJobsApi = JobEntityRef;

export const modelHudPlatformJobsApiSchema: Schema<ModelHudPlatformJobsApi> = s.of<ModelHudPlatformJobsApi>(
  s.union([s.lazy(() => jobEntityRefSchema)]),
);
