import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workflowExecutionConfigurationSchema,
  type WorkflowExecutionConfiguration,
} from "./workflow-execution-configuration.js";
import { workflowExecutionInfoSchema, type WorkflowExecutionInfo } from "./workflow-execution-info.js";
import {
  workflowExecutionOpenCountsSchema,
  type WorkflowExecutionOpenCounts,
} from "./workflow-execution-open-counts.js";

export type WorkflowExecutionDetail = {
  executionInfo: WorkflowExecutionInfo;
  executionConfiguration: WorkflowExecutionConfiguration;
  openCounts: WorkflowExecutionOpenCounts;
  /**
   * The time when the last activity task was scheduled for this workflow execution. You can use
   * this information to determine if the workflow has not made progress for an unusually long
   * period of time and might require a corrective action.
   */
  latestActivityTaskTimestamp?: Date;
  /**
   * The latest executionContext provided by the decider for this workflow execution. A decider can
   * provide an executionContext (a free-form string) when closing a decision task using
   * RespondDecisionTaskCompleted.
   */
  latestExecutionContext?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowExecutionDetailSchema: Schema<WorkflowExecutionDetail> =
  s.object<WorkflowExecutionDetail>(
    {
      executionInfo: workflowExecutionInfoSchema,
      executionConfiguration: workflowExecutionConfigurationSchema,
      openCounts: workflowExecutionOpenCountsSchema,
      latestActivityTaskTimestamp: s.optional(s.dateTime()),
      latestExecutionContext: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
