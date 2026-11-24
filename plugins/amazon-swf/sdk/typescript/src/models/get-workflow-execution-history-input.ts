import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type GetWorkflowExecutionHistoryInput = {
  /** The name of the domain containing the workflow execution. */
  domain: string;
  execution: WorkflowExecution;
  /**
   * If NextPageToken is returned there are more results available. The value of NextPageToken is a
   * unique pagination token for each page. Make the call again using the returned token to retrieve
   * the next page. Keep all other arguments unchanged. Each pagination token expires after 24
   * hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded
   * its maximum lifetime". The configured maximumPageSize determines how many results can be
   * returned in a single call.
   */
  nextPageToken?: string;
  /**
   * The maximum number of results that are returned per call. Use nextPageToken to obtain further
   * pages of results.
   */
  maximumPageSize?: number;
  /**
   * When set to true, returns the events in reverse order. By default the results are returned in
   * ascending order of the eventTimeStamp of the events.
   */
  reverseOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getWorkflowExecutionHistoryInputSchema: Schema<GetWorkflowExecutionHistoryInput> =
  s.object<GetWorkflowExecutionHistoryInput>(
    {
      domain: s.string(),
      execution: workflowExecutionSchema,
      nextPageToken: s.optional(s.string()),
      maximumPageSize: s.optional(s.int()),
      reverseOrder: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
