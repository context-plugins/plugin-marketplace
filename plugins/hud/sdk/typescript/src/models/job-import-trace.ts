import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentInternalSchema, agentSchema, type Agent } from "./unions/agent.js";
import { model1InternalSchema, model1Schema, type Model1 } from "./unions/model1.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";

/** One run of a task, done outside HUD. */
export type JobImportTrace = {
  externalId: string;
  /** `content_digest` of the build whose source defines the task the run executed */
  taskDigest: string;
  name?: NameHudPlatformJobsApi;
  agent?: Agent;
  /**
   * Model the run used, as the source reported it. A HUD model id or `model_name` also links the
   * trace to that model.
   */
  model?: Model1;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobImportTraceProperties: s.Shape<JobImportTrace> = {
  externalId: s.string(),
  taskDigest: s.string(),
  name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
  agent: s.optional(s.lazy(() => agentInternalSchema)),
  model: s.optional(s.lazy(() => model1InternalSchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    externalId: "external_id",
    taskDigest: "task_digest",
  },
};

export const jobImportTraceInternalSchema: Schema<JobImportTrace> = s.object<JobImportTrace>(
  jobImportTraceProperties,
  { additionalProperties: s.json() },
);

export const jobImportTraceSchema: Schema<JobImportTrace> = s.lazySchema(() =>
  s.object<JobImportTrace>(
    {
      ...jobImportTraceProperties,
      externalId: s.string().check(s.minLength(1), s.maxLength(255)),
      taskDigest: s.string().check(s.pattern("^sha256:[0-9a-f]{64}$")),
      agent: s.optional(s.lazy(() => agentSchema)),
      model: s.optional(s.lazy(() => model1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
