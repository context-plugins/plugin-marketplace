import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If specified, only list the executions whose current execution status matches the given filter.
 * If you provide a PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more information,
 * see Child workflow execution redrive behaviour in the Step Functions Developer Guide. If you
 * provide a stateMachineArn and a PENDING_REDRIVE statusFilter, the API returns a validation
 * exception.
 */
export const StatusFilter = {
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  TimedOut: "TIMED_OUT",
  Aborted: "ABORTED",
  PendingRedrive: "PENDING_REDRIVE",
} as const;
export type StatusFilter = (typeof StatusFilter)[keyof typeof StatusFilter] | (string & {});

export const statusFilterSchema: EnumSchema<StatusFilter> = s.enumOf<StatusFilter>(StatusFilter);
