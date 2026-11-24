import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The close status that must match the close status of an execution for it to meet the criteria of
 * this filter.
 */
export const StatusAmazonSimpleWorkflowServiceOperationsApi = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Terminated: "TERMINATED",
  ContinuedAsNew: "CONTINUED_AS_NEW",
  TimedOut: "TIMED_OUT",
} as const;
export type StatusAmazonSimpleWorkflowServiceOperationsApi =
  | (typeof StatusAmazonSimpleWorkflowServiceOperationsApi)[keyof typeof StatusAmazonSimpleWorkflowServiceOperationsApi]
  | (string & {});

export const statusAmazonSimpleWorkflowServiceOperationsApiSchema: EnumSchema<StatusAmazonSimpleWorkflowServiceOperationsApi> =
  s.enumOf<StatusAmazonSimpleWorkflowServiceOperationsApi>(StatusAmazonSimpleWorkflowServiceOperationsApi);
