import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolvedAgentSchema, type ResolvedAgent } from "./resolved-agent.js";
import { parentJobIdSchema, type ParentJobId } from "./unions/parent-job-id.js";

export type JobMetadata = {
  resolvedAgents?: ResolvedAgent[];
  sdkAgentParams?: Record<string, unknown>;
  parentJobId?: ParentJobId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobMetadataSchema: Schema<JobMetadata> = s.object<JobMetadata>(
  {
    resolvedAgents: s.optional(s.array(s.lazy(() => resolvedAgentSchema))),
    sdkAgentParams: s.optional(s.record(s.string(), s.unknown())),
    parentJobId: s.optional(s.lazy(() => parentJobIdSchema)),
    _keysMap: {
      resolvedAgents: "resolved_agents",
      sdkAgentParams: "sdk_agent_params",
      parentJobId: "parent_job_id",
    },
  },
  { additionalProperties: s.json() },
);
