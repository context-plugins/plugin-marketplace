import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { submittedAgentSpecSchema, type SubmittedAgentSpec } from "./submitted-agent-spec.js";
import { groupIdSchema, type GroupId } from "./unions/group-id.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import {
  slugHudPlatformRolloutsApiInternalSchema,
  slugHudPlatformRolloutsApiSchema,
  type SlugHudPlatformRolloutsApi,
} from "./unions/slug-hud-platform-rollouts-api.js";
import { verifierInternalSchema, verifierSchema, type Verifier } from "./unions/verifier.js";

/**
 * One v6 rollout under the SDK's job/trace identity.
 *
 * The SDK's rollout atom mints ``trace_id``/``job_id`` and submits the task by reference — env
 * name, task id (the ``@env.task`` name), bound args — plus the serialized agent spec. The platform
 * materializes the task_version chain, schedules an instance, and runs the rollout co-located with
 * the env; the SDK polls the trace to completion.
 *
 * ``slug`` is the taskset row key (``Task.external_id`` / portable ``Task.slug``). It is distinct
 * from ``task`` (the ``@env.task`` id used for scenario lookup) and is only needed when a job's
 * taskset has multiple versions sharing the same scenario+args.
 */
export type RolloutSubmitRequest = {
  traceId: string;
  jobId: string;
  groupId?: GroupId;
  env: string;
  task: string;
  slug?: SlugHudPlatformRolloutsApi;
  args?: Record<string, unknown>;
  runtimeConfig?: RuntimeConfigModel;
  verifier?: Verifier;
  /**
   * Registered identity a hosted runner rebuilds the agent from.
   *
   * Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the ``Agent.dump()``
   * config with runtime-only state and credentials stripped. The control plane reads ``model`` (for
   * inference routing and billing) and ``max_steps`` from ``config``, and stores ``config`` as
   * submitted except that ``model`` becomes the catalog's canonical model name. The instance
   * rebuilds the agent through ``AgentType``.
   */
  agent: SubmittedAgentSpec;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rolloutSubmitRequestProperties: s.Shape<RolloutSubmitRequest> = {
  traceId: s.string(),
  jobId: s.string(),
  groupId: s.optional(s.lazy(() => groupIdSchema)),
  env: s.string(),
  task: s.string(),
  slug: s.optional(s.lazy(() => slugHudPlatformRolloutsApiInternalSchema)),
  args: s.optional(s.record(s.string(), s.unknown())),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  verifier: s.optional(s.lazy(() => verifierInternalSchema)),
  agent: submittedAgentSpecSchema,
  _keysMap: {
    traceId: "trace_id",
    jobId: "job_id",
    groupId: "group_id",
    runtimeConfig: "runtime_config",
  },
};

export const rolloutSubmitRequestInternalSchema: Schema<RolloutSubmitRequest> =
  s.object<RolloutSubmitRequest>(rolloutSubmitRequestProperties, { additionalProperties: s.json() });

export const rolloutSubmitRequestSchema: Schema<RolloutSubmitRequest> = s.lazySchema(() =>
  s.object<RolloutSubmitRequest>(
    {
      ...rolloutSubmitRequestProperties,
      env: s.string().check(s.minLength(1)),
      task: s.string().check(s.minLength(1)),
      slug: s.optional(s.lazy(() => slugHudPlatformRolloutsApiSchema)),
      runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
      verifier: s.optional(s.lazy(() => verifierSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
