import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./unions/agent-config.js";
import { columns1Schema, type Columns1 } from "./unions/columns1.js";
import {
  envHudPlatformTasksetsApiSchema,
  type EnvHudPlatformTasksetsApi,
} from "./unions/env-hud-platform-tasksets-api.js";
import { runtimeConfigSchema, type RuntimeConfig } from "./unions/runtime-config.js";
import {
  scenarioHudPlatformTasksetsApiSchema,
  type ScenarioHudPlatformTasksetsApi,
} from "./unions/scenario-hud-platform-tasksets-api.js";
import { validationSchema, type Validation } from "./unions/validation.js";
import { verifierInternalSchema, verifierSchema, type Verifier } from "./unions/verifier.js";

/**
 * One exported task — the read-side mirror of `TaskUploadItem` (latest version per task).
 *
 * `name` is the upload upsert key (`external_id` falling back to the task name), so re-uploading an
 * export updates the same tasks.
 */
export type TasksetExportTask = {
  name: string;
  env?: EnvHudPlatformTasksetsApi;
  scenario?: ScenarioHudPlatformTasksetsApi;
  args?: Record<string, unknown>;
  validation?: Validation;
  agentConfig?: AgentConfig;
  columns?: Columns1;
  runtimeConfig?: RuntimeConfig;
  verifier?: Verifier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tasksetExportTaskProperties: s.Shape<TasksetExportTask> = {
  name: s.string(),
  env: s.optional(s.lazy(() => envHudPlatformTasksetsApiSchema)),
  scenario: s.optional(s.lazy(() => scenarioHudPlatformTasksetsApiSchema)),
  args: s.optional(s.record(s.string(), s.unknown())),
  validation: s.optional(s.lazy(() => validationSchema)),
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
  columns: s.optional(s.lazy(() => columns1Schema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigSchema)),
  verifier: s.optional(s.lazy(() => verifierInternalSchema)),
  _keysMap: {
    agentConfig: "agent_config",
    runtimeConfig: "runtime_config",
  },
};

export const tasksetExportTaskInternalSchema: Schema<TasksetExportTask> = s.object<TasksetExportTask>(
  tasksetExportTaskProperties,
  { additionalProperties: s.json() },
);

export const tasksetExportTaskSchema: Schema<TasksetExportTask> = s.lazySchema(() =>
  s.object<TasksetExportTask>(
    {
      ...tasksetExportTaskProperties,
      verifier: s.optional(s.lazy(() => verifierSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
