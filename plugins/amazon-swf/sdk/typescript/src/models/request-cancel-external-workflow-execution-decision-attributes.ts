import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestCancelExternalWorkflowExecutionDecisionAttributes = {
  /** The workflowId of the external workflow execution to cancel. */
  workflowId: string;
  /** The runId of the external workflow execution to cancel. */
  runId?: string;
  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks.
   */
  control?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCancelExternalWorkflowExecutionDecisionAttributesSchema: Schema<RequestCancelExternalWorkflowExecutionDecisionAttributes> =
  s.object<RequestCancelExternalWorkflowExecutionDecisionAttributes>(
    {
      workflowId: s.string(),
      runId: s.optional(s.string()),
      control: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
