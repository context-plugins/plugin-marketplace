import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestCancelWorkflowExecutionInput = {
  /** The name of the domain containing the workflow execution to cancel. */
  domain: string;
  /** The workflowId of the workflow execution to cancel. */
  workflowId: string;
  /** The runId of the workflow execution to cancel. */
  runId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCancelWorkflowExecutionInputSchema: Schema<RequestCancelWorkflowExecutionInput> =
  s.object<RequestCancelWorkflowExecutionInput>(
    {
      domain: s.string(),
      workflowId: s.string(),
      runId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
