import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cause6Schema, type Cause6 } from "./cause6.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type WorkflowExecutionCancelRequestedEventAttributes = {
  externalWorkflowExecution?: WorkflowExecution;
  /**
   * The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the
   * RequestCancelExternalWorkflowExecution decision to cancel this workflow execution.The source
   * event with this ID can be found in the history of the source workflow execution. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  externalInitiatedEventId?: number;
  /**
   * If set, indicates that the request to cancel the workflow execution was automatically
   * generated, and specifies the cause. This happens if the parent workflow execution times out or
   * is terminated, and the child policy is set to cancel child executions.
   */
  cause?: Cause6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionCancelRequestedEventAttributesSchema: Schema<WorkflowExecutionCancelRequestedEventAttributes> =
  s.object<WorkflowExecutionCancelRequestedEventAttributes>(
    {
      externalWorkflowExecution: s.optional(s.lazy(() => workflowExecutionSchema)),
      externalInitiatedEventId: s.optional(s.int()),
      cause: s.optional(s.lazy(() => cause6Schema)),
    },
    { additionalProperties: s.json() },
  );
