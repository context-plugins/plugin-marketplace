import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WorkflowMutableProperties = {
  /** The name of the workflow. */
  name?: string;
};

export const workflowMutablePropertiesSchema: Schema<WorkflowMutableProperties> =
  s.object<WorkflowMutableProperties>({
    name: s.optional(s.string()),
  });
