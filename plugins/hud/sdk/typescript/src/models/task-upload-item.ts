import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./unions/agent-config.js";
import { argsSchema, type Args } from "./unions/args.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { columns1Schema, type Columns1 } from "./unions/columns1.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { envSchema, type Env } from "./unions/env.js";
import { externalIdInternalSchema, externalIdSchema, type ExternalId } from "./unions/external-id.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import { scenarioIdSchema, type ScenarioId } from "./unions/scenario-id.js";
import { scenarioNameSchema, type ScenarioName } from "./unions/scenario-name.js";
import { systemPromptSchema, type SystemPrompt } from "./unions/system-prompt.js";
import { taskIdSchema, type TaskId } from "./unions/task-id.js";
import { validationSchema, type Validation } from "./unions/validation.js";
import { verifierInternalSchema, verifierSchema, type Verifier } from "./unions/verifier.js";

/**
 * Single item in a /tasks/upload payload.
 *
 * Three shapes coexist:
 *   - v6 shape: `env={"name": ...}` + `task_id` (the bare task id from the env's manifest) +
 *     `args`/`validation`/`agent_config`. Resolved with an exact lookup against the env's latest
 *     build; `args` are validated against the task's manifest args schema.
 *   - Pre-resolved shape: caller supplies `scenario_id` explicitly (tests and direct API
 *     consumers).
 *   - Build shape: `build_id`, optionally with `scenario_name`. The build may not be built yet; the
 *     task binds to the named scenario when it is. Without `scenario_name` the build's source
 *     defines the task, which stays unbound.
 *
 * Name-resolved shapes win over `scenario_id` (the resolver re-derives the scenario from the env
 * name + latest build).
 */
export type TaskUploadItem = {
  name: string;
  description?: Description;
  externalId?: ExternalId;
  env?: Env;
  taskId?: TaskId;
  args?: Args;
  validation?: Validation;
  systemPrompt?: SystemPrompt;
  agentConfig?: AgentConfig;
  columns?: Columns1;
  runtimeConfig?: RuntimeConfigModel;
  verifier?: Verifier;
  scenarioId?: ScenarioId;
  buildId?: BuildId;
  scenarioName?: ScenarioName;
  /** Leave a task the taskset already has under this external id unchanged @default false */
  keepExisting?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskUploadItemProperties: s.Shape<TaskUploadItem> = {
  name: s.string(),
  description: s.optional(s.lazy(() => descriptionSchema)),
  externalId: s.optional(s.lazy(() => externalIdInternalSchema)),
  env: s.optional(s.lazy(() => envSchema)),
  taskId: s.optional(s.lazy(() => taskIdSchema)),
  args: s.optional(s.lazy(() => argsSchema)),
  validation: s.optional(s.lazy(() => validationSchema)),
  systemPrompt: s.optional(s.lazy(() => systemPromptSchema)),
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
  columns: s.optional(s.lazy(() => columns1Schema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  verifier: s.optional(s.lazy(() => verifierInternalSchema)),
  scenarioId: s.optional(s.lazy(() => scenarioIdSchema)),
  buildId: s.optional(s.lazy(() => buildIdSchema)),
  scenarioName: s.optional(s.lazy(() => scenarioNameSchema)),
  keepExisting: s.defaulted(s.boolean(), false),
  _keysMap: {
    externalId: "external_id",
    taskId: "task_id",
    systemPrompt: "system_prompt",
    agentConfig: "agent_config",
    runtimeConfig: "runtime_config",
    scenarioId: "scenario_id",
    buildId: "build_id",
    scenarioName: "scenario_name",
    keepExisting: "keep_existing",
  },
};

export const taskUploadItemInternalSchema: Schema<TaskUploadItem> = s.object<TaskUploadItem>(
  taskUploadItemProperties,
  { additionalProperties: s.json() },
);

export const taskUploadItemSchema: Schema<TaskUploadItem> = s.lazySchema(() =>
  s.object<TaskUploadItem>(
    {
      ...taskUploadItemProperties,
      name: s.string().check(s.maxLength(255)),
      externalId: s.optional(s.lazy(() => externalIdSchema)),
      runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
      verifier: s.optional(s.lazy(() => verifierSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
