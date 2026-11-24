import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  maxConcurrentHudPlatformRolloutsApiInternalSchema,
  maxConcurrentHudPlatformRolloutsApiSchema,
  type MaxConcurrentHudPlatformRolloutsApi,
} from "./unions/max-concurrent-hud-platform-rollouts-api.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";

/** Batch Job launch. */
export type RolloutRunListRequest = {
  name?: NameHudPlatformJobsApi;
  tasksetId?: TasksetId;
  taskIds?: string[];
  taskVersionIds?: string[];
  modelIds?: string[];
  /** @default 1 */
  groupSize?: number;
  /** @default 100 */
  maxSteps?: number;
  maxConcurrent?: MaxConcurrentHudPlatformRolloutsApi;
  runtimeConfig?: RuntimeConfigModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rolloutRunListRequestProperties: s.Shape<RolloutRunListRequest> = {
  name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
  tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
  taskIds: s.optional(s.array(s.string())),
  taskVersionIds: s.optional(s.array(s.string())),
  modelIds: s.optional(s.array(s.string())),
  groupSize: s.defaulted(s.int(), 1),
  maxSteps: s.defaulted(s.int(), 100),
  maxConcurrent: s.optional(s.lazy(() => maxConcurrentHudPlatformRolloutsApiInternalSchema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  _keysMap: {
    tasksetId: "taskset_id",
    taskIds: "task_ids",
    taskVersionIds: "task_version_ids",
    modelIds: "model_ids",
    groupSize: "group_size",
    maxSteps: "max_steps",
    maxConcurrent: "max_concurrent",
    runtimeConfig: "runtime_config",
  },
};

export const rolloutRunListRequestInternalSchema: Schema<RolloutRunListRequest> =
  s.object<RolloutRunListRequest>(rolloutRunListRequestProperties, { additionalProperties: s.json() });

export const rolloutRunListRequestSchema: Schema<RolloutRunListRequest> = s.lazySchema(() =>
  s.object<RolloutRunListRequest>(
    {
      ...rolloutRunListRequestProperties,
      groupSize: s.defaulted(s.int().check(s.gte(1)), 1),
      maxSteps: s.defaulted(s.int().check(s.gte(1)), 100),
      maxConcurrent: s.optional(s.lazy(() => maxConcurrentHudPlatformRolloutsApiSchema)),
      runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
