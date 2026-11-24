import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import { traceIdSchema, type TraceId } from "./unions/trace-id.js";
import { traceNameSchema, type TraceName } from "./unions/trace-name.js";

/** Single-trace launch. A ``trace_id`` names a new trace; one that already exists is refused. */
export type RolloutRunRequest = {
  taskVersionId: string;
  modelId: string;
  traceId?: TraceId;
  /** @default 100 */
  maxSteps?: number;
  traceName?: TraceName;
  runtimeConfig?: RuntimeConfigModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rolloutRunRequestProperties: s.Shape<RolloutRunRequest> = {
  taskVersionId: s.string(),
  modelId: s.string(),
  traceId: s.optional(s.lazy(() => traceIdSchema)),
  maxSteps: s.defaulted(s.int(), 100),
  traceName: s.optional(s.lazy(() => traceNameSchema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  _keysMap: {
    taskVersionId: "task_version_id",
    modelId: "model_id",
    traceId: "trace_id",
    maxSteps: "max_steps",
    traceName: "trace_name",
    runtimeConfig: "runtime_config",
  },
};

export const rolloutRunRequestInternalSchema: Schema<RolloutRunRequest> = s.object<RolloutRunRequest>(
  rolloutRunRequestProperties,
  { additionalProperties: s.json() },
);

export const rolloutRunRequestSchema: Schema<RolloutRunRequest> = s.lazySchema(() =>
  s.object<RolloutRunRequest>(
    {
      ...rolloutRunRequestProperties,
      runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
