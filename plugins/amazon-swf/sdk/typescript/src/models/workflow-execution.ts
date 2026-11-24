import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkflowExecution = {
  /** The user defined identifier associated with the workflow execution. */
  workflowId: string;
  /** A system-generated unique identifier for the workflow execution. */
  runId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionSchema: Schema<WorkflowExecution> = s.object<WorkflowExecution>(
  {
    workflowId: s.string(),
    runId: s.string(),
  },
  { additionalProperties: s.json() },
);
