import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowRerunRequest = {
  /** List of job IDs to rerun. If empty, all jobs will be rerun. */
  jobs?: string[];
  /** Whether to rerun only from failed jobs */
  fromFailed?: boolean;
  /** Whether to enable SSH access for the rerun */
  enableSsh?: boolean;
  /** Whether to rerun only the specified jobs and their dependencies */
  sparseTree?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowRerunRequestSchema: Schema<WorkflowRerunRequest> = s.object<WorkflowRerunRequest>(
  {
    jobs: s.optional(s.array(s.string())),
    fromFailed: s.optional(s.boolean()),
    enableSsh: s.optional(s.boolean()),
    sparseTree: s.optional(s.boolean()),
    _keysMap: {
      fromFailed: "from_failed",
      enableSsh: "enable_ssh",
      sparseTree: "sparse_tree",
    },
  },
  { additionalProperties: s.json() },
);
