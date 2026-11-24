import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowTypeFilter = {
  /** Name of the workflow type. */
  name: string;
  /** Version of the workflow type. */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeFilterSchema: Schema<WorkflowTypeFilter> = s.object<WorkflowTypeFilter>(
  {
    name: s.string(),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
