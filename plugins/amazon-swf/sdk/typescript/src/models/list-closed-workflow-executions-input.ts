import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { closeStatusFilterSchema, type CloseStatusFilter } from "./close-status-filter.js";
import { executionTimeFilterSchema, type ExecutionTimeFilter } from "./execution-time-filter.js";
import { tagFilterSchema, type TagFilter } from "./tag-filter.js";
import { workflowExecutionFilterSchema, type WorkflowExecutionFilter } from "./workflow-execution-filter.js";
import { workflowTypeFilterSchema, type WorkflowTypeFilter } from "./workflow-type-filter.js";

export type ListClosedWorkflowExecutionsInput = {
  /** The name of the domain that contains the workflow executions to list. */
  domain: string;
  startTimeFilter?: ExecutionTimeFilter;
  closeTimeFilter?: ExecutionTimeFilter;
  executionFilter?: WorkflowExecutionFilter;
  closeStatusFilter?: CloseStatusFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
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
   * When set to true, returns the results in reverse order. By default the results are returned in
   * descending order of the start or the close time of the executions.
   */
  reverseOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listClosedWorkflowExecutionsInputSchema: Schema<ListClosedWorkflowExecutionsInput> =
  s.object<ListClosedWorkflowExecutionsInput>(
    {
      domain: s.string(),
      startTimeFilter: s.optional(s.lazy(() => executionTimeFilterSchema)),
      closeTimeFilter: s.optional(s.lazy(() => executionTimeFilterSchema)),
      executionFilter: s.optional(s.lazy(() => workflowExecutionFilterSchema)),
      closeStatusFilter: s.optional(s.lazy(() => closeStatusFilterSchema)),
      typeFilter: s.optional(s.lazy(() => workflowTypeFilterSchema)),
      tagFilter: s.optional(s.lazy(() => tagFilterSchema)),
      nextPageToken: s.optional(s.string()),
      maximumPageSize: s.optional(s.int()),
      reverseOrder: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
