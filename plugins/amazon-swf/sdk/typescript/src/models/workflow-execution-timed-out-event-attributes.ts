import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childPolicy3Schema, type ChildPolicy3 } from "./child-policy3.js";

export type WorkflowExecutionTimedOutEventAttributes = {
  /** The type of timeout that caused this event. @default "START_TO_CLOSE" */
  timeoutType?: "START_TO_CLOSE";
  /**
   * The policy used for the child workflow executions of this workflow execution. The supported
   * child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request
   * to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested
   * event in its history. It is up to the decider to take appropriate actions when it receives an
   * execution history with this event. ABANDON – No action is taken. The child executions continue
   * to run.
   */
  childPolicy: ChildPolicy3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionTimedOutEventAttributesSchema: Schema<WorkflowExecutionTimedOutEventAttributes> =
  s.object<WorkflowExecutionTimedOutEventAttributes>(
    {
      timeoutType: s.defaulted(s.literal("START_TO_CLOSE"), "START_TO_CLOSE"),
      childPolicy: childPolicy3Schema,
    },
    { additionalProperties: s.json() },
  );
