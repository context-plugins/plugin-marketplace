import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { closeStatusSchema, type CloseStatus } from "./close-status.js";
import { executionStatusSchema, type ExecutionStatus } from "./execution-status.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type WorkflowExecutionInfo = {
  execution: WorkflowExecution;
  workflowType: WorkflowType;
  /** The time when the execution was started. */
  startTimestamp: Date;
  /**
   * The time when the workflow execution was closed. Set only if the execution status is CLOSED.
   */
  closeTimestamp?: Date;
  /** The current status of the execution. */
  executionStatus: ExecutionStatus;
  /**
   * If the execution status is closed then this specifies how the execution was closed: COMPLETED –
   * the execution was successfully completed. CANCELED – the execution was canceled.Cancellation
   * allows the implementation to gracefully clean up before the execution is closed. TERMINATED –
   * the execution was force terminated. FAILED – the execution failed to complete. TIMED_OUT – the
   * execution did not complete in the alloted time and was automatically timed out.
   * CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was
   * completed and a new execution was started to car
   */
  closeStatus?: CloseStatus;
  parent?: WorkflowExecution;
  /**
   * The list of tags associated with the workflow execution. Tags can be used to identify and list
   * workflow executions of interest through the visibility APIs. A workflow execution can have a
   * maximum of 5 tags.
   */
  tagList?: string[];
  /** Set to true if a cancellation is requested for this workflow execution. */
  cancelRequested?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionInfoSchema: Schema<WorkflowExecutionInfo> = s.object<WorkflowExecutionInfo>(
  {
    execution: workflowExecutionSchema,
    workflowType: workflowTypeSchema,
    startTimestamp: s.dateTime(),
    closeTimestamp: s.optional(s.dateTime()),
    executionStatus: executionStatusSchema,
    closeStatus: s.optional(s.lazy(() => closeStatusSchema)),
    parent: s.optional(s.lazy(() => workflowExecutionSchema)),
    tagList: s.optional(s.array(s.string())),
    cancelRequested: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
