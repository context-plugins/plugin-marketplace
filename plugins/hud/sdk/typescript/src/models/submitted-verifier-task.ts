import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./unions/agent-config.js";
import { columnsSchema, type Columns } from "./unions/columns.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import { validationSchema, type Validation } from "./unions/validation.js";

/** Nested verifier task carried by a task row. */
export type SubmittedVerifierTask = {
  env: string;
  id: string;
  args?: Record<string, unknown>;
  slug: string;
  validation?: Validation;
  agentConfig?: AgentConfig;
  columns?: Columns;
  runtimeConfig?: RuntimeConfigModel;
};

const submittedVerifierTaskProperties: s.Shape<SubmittedVerifierTask> = {
  env: s.string(),
  id: s.string(),
  args: s.optional(s.record(s.string(), s.unknown())),
  slug: s.string(),
  validation: s.optional(s.lazy(() => validationSchema)),
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
  columns: s.optional(s.lazy(() => columnsSchema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  _keysMap: {
    agentConfig: "agent_config",
    runtimeConfig: "runtime_config",
  },
};

export const submittedVerifierTaskInternalSchema: Schema<SubmittedVerifierTask> =
  s.object<SubmittedVerifierTask>(submittedVerifierTaskProperties);

export const submittedVerifierTaskSchema: Schema<SubmittedVerifierTask> = s.lazySchema(() =>
  s.object<SubmittedVerifierTask>({
    ...submittedVerifierTaskProperties,
    env: s.string().check(s.minLength(1)),
    id: s.string().check(s.minLength(1)),
    slug: s.string().check(s.minLength(1)),
    runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
  }),
);
