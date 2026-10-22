import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateWorkflowRequest = {
  /** The name of the workflow. */
  name?: string;
  /** Used to create a transient workflow. */
  transient?: boolean;
  /** id of the parent workflow for transient workflows */
  parentWorkflowId?: string;
};

export const createWorkflowRequestSchema: Schema<CreateWorkflowRequest> = s.object<CreateWorkflowRequest>({
  name: s.optional(s.string()),
  transient: s.optional(s.boolean()),
  parentWorkflowId: s.optional(s.string()),
});
