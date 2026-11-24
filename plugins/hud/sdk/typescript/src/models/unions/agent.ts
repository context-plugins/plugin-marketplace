import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  jobImportAgentInternalSchema,
  jobImportAgentSchema,
  type JobImportAgent,
} from "../job-import-agent.js";

export type Agent = JobImportAgent;

export const agentInternalSchema: Schema<Agent> = s.of<Agent>(
  s.union([s.lazy(() => jobImportAgentInternalSchema)]),
);

export const agentSchema: Schema<Agent> = s.lazySchema(() =>
  s.of<Agent>(s.union([s.lazy(() => jobImportAgentSchema)])),
);
