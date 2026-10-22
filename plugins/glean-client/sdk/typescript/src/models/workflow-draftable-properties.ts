import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WorkflowDraftableProperties = {
  /** The name of the workflow. */
  name?: string;
};

export const workflowDraftablePropertiesSchema: Schema<WorkflowDraftableProperties> =
  s.object<WorkflowDraftableProperties>({
    name: s.optional(s.string()),
  });
