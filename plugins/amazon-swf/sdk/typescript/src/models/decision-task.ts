import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyEventSchema, type HistoryEvent } from "./history-event.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";
import { workflowTypeSchema, type WorkflowType } from "./workflow-type.js";

export type DecisionTask = {
  /**
   * The opaque string used as a handle on the task. This token is used by workers to communicate
   * progress and response information back to the system about the task.
   */
  taskToken: string;
  /** The ID of the DecisionTaskStarted event recorded in the history. */
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  workflowType: WorkflowType;
  /**
   * A paginated list of history events of the workflow execution. The decider uses this during the
   * processing of the decision task.
   */
  events: HistoryEvent[];
  /**
   * If a NextPageToken was returned by a previous call, there are more results available. To
   * retrieve the next page of results, make the call again using the returned token in
   * nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines
   * how many results can be returned in a single call.
   */
  nextPageToken?: string;
  /**
   * The ID of the DecisionTaskStarted event of the previous decision task of this workflow
   * execution that was processed by the decider. This can be used to determine the events in the
   * history new since the last decision task received by the decider.
   */
  previousStartedEventId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionTaskSchema: Schema<DecisionTask> = s.object<DecisionTask>(
  {
    taskToken: s.string(),
    startedEventId: s.int(),
    workflowExecution: workflowExecutionSchema,
    workflowType: workflowTypeSchema,
    events: s.array(s.lazy(() => historyEventSchema)),
    nextPageToken: s.optional(s.string()),
    previousStartedEventId: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
