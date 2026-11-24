import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecutionFilter = {
  /** The workflowId to pass of match the criteria of this filter. */
  workflowId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionFilterSchema: Schema<WorkflowExecutionFilter> =
  s.object<WorkflowExecutionFilter>(
    {
      workflowId: s.string(),
    },
    { additionalProperties: s.json() },
  );
