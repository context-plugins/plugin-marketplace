import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { closeStatusFilterSchema, type CloseStatusFilter } from "./close-status-filter.js";
import { executionTimeFilterSchema, type ExecutionTimeFilter } from "./execution-time-filter.js";
import { tagFilterSchema, type TagFilter } from "./tag-filter.js";
import { workflowExecutionFilterSchema, type WorkflowExecutionFilter } from "./workflow-execution-filter.js";
import { workflowTypeFilterSchema, type WorkflowTypeFilter } from "./workflow-type-filter.js";

export type CountClosedWorkflowExecutionsInput = {
  /** The name of the domain containing the workflow executions to count. */
  domain: string;
  startTimeFilter?: ExecutionTimeFilter;
  closeTimeFilter?: ExecutionTimeFilter;
  executionFilter?: WorkflowExecutionFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  closeStatusFilter?: CloseStatusFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countClosedWorkflowExecutionsInputSchema: Schema<CountClosedWorkflowExecutionsInput> =
  s.object<CountClosedWorkflowExecutionsInput>(
    {
      domain: s.string(),
      startTimeFilter: s.optional(s.lazy(() => executionTimeFilterSchema)),
      closeTimeFilter: s.optional(s.lazy(() => executionTimeFilterSchema)),
      executionFilter: s.optional(s.lazy(() => workflowExecutionFilterSchema)),
      typeFilter: s.optional(s.lazy(() => workflowTypeFilterSchema)),
      tagFilter: s.optional(s.lazy(() => tagFilterSchema)),
      closeStatusFilter: s.optional(s.lazy(() => closeStatusFilterSchema)),
    },
    { additionalProperties: s.json() },
  );
