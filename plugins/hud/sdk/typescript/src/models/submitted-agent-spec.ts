import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeHudPlatformRolloutsApiSchema,
  type TypeHudPlatformRolloutsApi,
} from "./type-hud-platform-rollouts-api.js";

/**
 * Registered identity a hosted runner rebuilds the agent from.
 *
 * Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the ``Agent.dump()`` config
 * with runtime-only state and credentials stripped. The control plane reads ``model`` (for
 * inference routing and billing) and ``max_steps`` from ``config``, and stores ``config`` as
 * submitted except that ``model`` becomes the catalog's canonical model name. The instance rebuilds
 * the agent through ``AgentType``.
 */
export type SubmittedAgentSpec = {
  type: TypeHudPlatformRolloutsApi;
  config: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const submittedAgentSpecSchema: Schema<SubmittedAgentSpec> = s.object<SubmittedAgentSpec>(
  {
    type: typeHudPlatformRolloutsApiSchema,
    config: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
