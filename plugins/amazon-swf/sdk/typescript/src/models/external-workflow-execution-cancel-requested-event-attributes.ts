import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type ExternalWorkflowExecutionCancelRequestedEventAttributes = {
  workflowExecution: WorkflowExecution;
  /**
   * The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the
   * RequestCancelExternalWorkflowExecution decision to cancel this external workflow execution.
   * This information can be useful for diagnosing problems by tracing back the chain of events
   * leading up to this event.
   */
  initiatedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalWorkflowExecutionCancelRequestedEventAttributesSchema: Schema<ExternalWorkflowExecutionCancelRequestedEventAttributes> =
  s.object<ExternalWorkflowExecutionCancelRequestedEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      initiatedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
