import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type ExternalWorkflowExecutionSignaledEventAttributes = {
  workflowExecution: WorkflowExecution;
  /**
   * The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the
   * SignalExternalWorkflowExecution decision to request this signal. This information can be useful
   * for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  initiatedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalWorkflowExecutionSignaledEventAttributesSchema: Schema<ExternalWorkflowExecutionSignaledEventAttributes> =
  s.object<ExternalWorkflowExecutionSignaledEventAttributes>(
    {
      workflowExecution: workflowExecutionSchema,
      initiatedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
