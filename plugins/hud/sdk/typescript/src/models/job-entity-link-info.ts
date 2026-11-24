import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modelHudPlatformJobsApiSchema,
  type ModelHudPlatformJobsApi,
} from "./unions/model-hud-platform-jobs-api.js";
import { registrySchema, type Registry } from "./unions/registry.js";
import { taskset1Schema, type Taskset1 } from "./unions/taskset1.js";

export type JobEntityLinkInfo = {
  registry?: Registry;
  taskset?: Taskset1;
  model?: ModelHudPlatformJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobEntityLinkInfoSchema: Schema<JobEntityLinkInfo> = s.object<JobEntityLinkInfo>(
  {
    registry: s.optional(s.lazy(() => registrySchema)),
    taskset: s.optional(s.lazy(() => taskset1Schema)),
    model: s.optional(s.lazy(() => modelHudPlatformJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
