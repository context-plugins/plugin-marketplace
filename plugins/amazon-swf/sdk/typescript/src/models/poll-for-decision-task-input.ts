import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type PollForDecisionTaskInput = {
  /** The name of the domain containing the task lists to poll. */
  domain: string;
  taskList: TaskList;
  /**
   * Identity of the decider making the request, which is recorded in the DecisionTaskStarted event
   * in the workflow history. This enables diagnostic tracing when problems arise. The form of this
   * identity is user defined.
   */
  identity?: string;
  /**
   * If NextPageToken is returned there are more results available. The value of NextPageToken is a
   * unique pagination token for each page. Make the call again using the returned token to retrieve
   * the next page. Keep all other arguments unchanged. Each pagination token expires after 24
   * hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded
   * its maximum lifetime". The configured maximumPageSize determines how many results can be
   * returned in a single call. The nextPageToken returned by this action cannot be used with
   * GetWorkflowExecutionHistory to get the next p
   */
  nextPageToken?: string;
  /**
   * The maximum number of results that are returned per call. Use nextPageToken to obtain further
   * pages of results. This is an upper limit only; the actual number of results returned per call
   * may be fewer than the specified maximum.
   */
  maximumPageSize?: number;
  /**
   * When set to true, returns the events in reverse order. By default the results are returned in
   * ascending order of the eventTimestamp of the events.
   */
  reverseOrder?: boolean;
  /**
   * When set to true, returns the events with eventTimestamp greater than or equal to
   * eventTimestamp of the most recent DecisionTaskStarted event. By default, this parameter is set
   * to false.
   */
  startAtPreviousStartedEvent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollForDecisionTaskInputSchema: Schema<PollForDecisionTaskInput> =
  s.object<PollForDecisionTaskInput>(
    {
      domain: s.string(),
      taskList: taskListSchema,
      identity: s.optional(s.string()),
      nextPageToken: s.optional(s.string()),
      maximumPageSize: s.optional(s.int()),
      reverseOrder: s.optional(s.boolean()),
      startAtPreviousStartedEvent: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
