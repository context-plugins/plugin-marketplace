import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importAgentStatusSchema, type ImportAgentStatus } from "./import-agent-status.js";
import { workflowResultSchema, type WorkflowResult } from "./workflow-result.js";

export type ImportAgentResponse = {
  workflowResult?: WorkflowResult;
  /** Outcome of the import for the target agent. */
  status?: ImportAgentStatus;
};

export const importAgentResponseSchema: Schema<ImportAgentResponse> = s.object<ImportAgentResponse>({
  workflowResult: s.optional(s.lazy(() => workflowResultSchema)),
  status: s.optional(s.lazy(() => importAgentStatusSchema)),
});
