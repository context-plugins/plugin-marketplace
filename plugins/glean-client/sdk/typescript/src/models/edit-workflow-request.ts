import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditWorkflowRequest = {
  /** The name of the workflow. */
  name?: string;
  /** The workflow ID we want to update. */
  id?: string;
};

export const editWorkflowRequestSchema: Schema<EditWorkflowRequest> = s.object<EditWorkflowRequest>({
  name: s.optional(s.string()),
  id: s.optional(s.string()),
});
