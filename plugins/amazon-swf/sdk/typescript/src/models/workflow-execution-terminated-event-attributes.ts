import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cause5Schema, type Cause5 } from "./cause5.js";
import { childPolicy3Schema, type ChildPolicy3 } from "./child-policy3.js";

export type WorkflowExecutionTerminatedEventAttributes = {
  /** The reason provided for the termination. */
  reason?: string;
  /** The details provided for the termination. */
  details?: string;
  /**
   * The policy used for the child workflow executions of this workflow execution. The supported
   * child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request
   * to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested
   * event in its history. It is up to the decider to take appropriate actions when it receives an
   * execution history with this event. ABANDON – No action is taken. The child executions continue
   * to run.
   */
  childPolicy: ChildPolicy3;
  /**
   * If set, indicates that the workflow execution was automatically terminated, and specifies the
   * cause. This happens if the parent workflow execution times out or is terminated and the child
   * policy is set to terminate child executions.
   */
  cause?: Cause5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionTerminatedEventAttributesSchema: Schema<WorkflowExecutionTerminatedEventAttributes> =
  s.object<WorkflowExecutionTerminatedEventAttributes>(
    {
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
      childPolicy: childPolicy3Schema,
      cause: s.optional(s.lazy(() => cause5Schema)),
    },
    { additionalProperties: s.json() },
  );
