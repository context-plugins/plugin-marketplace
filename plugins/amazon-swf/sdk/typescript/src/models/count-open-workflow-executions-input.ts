import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionTimeFilterSchema, type ExecutionTimeFilter } from "./execution-time-filter.js";
import { tagFilterSchema, type TagFilter } from "./tag-filter.js";
import { workflowExecutionFilterSchema, type WorkflowExecutionFilter } from "./workflow-execution-filter.js";
import { workflowTypeFilterSchema, type WorkflowTypeFilter } from "./workflow-type-filter.js";

export type CountOpenWorkflowExecutionsInput = {
  /** The name of the domain containing the workflow executions to count. */
  domain: string;
  startTimeFilter: ExecutionTimeFilter;
  typeFilter?: WorkflowTypeFilter;
  tagFilter?: TagFilter;
  executionFilter?: WorkflowExecutionFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countOpenWorkflowExecutionsInputSchema: Schema<CountOpenWorkflowExecutionsInput> =
  s.object<CountOpenWorkflowExecutionsInput>(
    {
      domain: s.string(),
      startTimeFilter: executionTimeFilterSchema,
      typeFilter: s.optional(s.lazy(() => workflowTypeFilterSchema)),
      tagFilter: s.optional(s.lazy(() => tagFilterSchema)),
      executionFilter: s.optional(s.lazy(() => workflowExecutionFilterSchema)),
    },
    { additionalProperties: s.json() },
  );
