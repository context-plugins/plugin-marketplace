import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type DescribeWorkflowExecutionInput = {
  /** The name of the domain containing the workflow execution. */
  domain: string;
  execution: WorkflowExecution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWorkflowExecutionInputSchema: Schema<DescribeWorkflowExecutionInput> =
  s.object<DescribeWorkflowExecutionInput>(
    {
      domain: s.string(),
      execution: workflowExecutionSchema,
    },
    { additionalProperties: s.json() },
  );
