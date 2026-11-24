import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type WorkflowExecutionSignaledEventAttributes = {
  /**
   * The name of the signal received. The decider can use the signal name and inputs to determine
   * how to the process the signal.
   */
  signalName: string;
  /**
   * The inputs provided with the signal. The decider can use the signal name and inputs to
   * determine how to process the signal.
   */
  input?: string;
  externalWorkflowExecution?: WorkflowExecution;
  /**
   * The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the
   * SignalExternalWorkflow decision to signal this workflow execution.The source event with this ID
   * can be found in the history of the source workflow execution. This information can be useful
   * for diagnosing problems by tracing back the chain of events leading up to this event. This
   * field is set only if the signal was initiated by another workflow execution.
   */
  externalInitiatedEventId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionSignaledEventAttributesSchema: Schema<WorkflowExecutionSignaledEventAttributes> =
  s.object<WorkflowExecutionSignaledEventAttributes>(
    {
      signalName: s.string(),
      input: s.optional(s.string()),
      externalWorkflowExecution: s.optional(s.lazy(() => workflowExecutionSchema)),
      externalInitiatedEventId: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
