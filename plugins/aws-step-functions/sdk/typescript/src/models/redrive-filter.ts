import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sets a filter to list executions based on whether or not they have been redriven. For a
 * Distributed Map, redriveFilter sets a filter to list child workflow executions based on whether
 * or not they have been redriven. If you do not provide a redriveFilter, Step Functions returns a
 * list of both redriven and non-redriven executions. If you provide a state machine ARN in
 * redriveFilter, the API returns a validation exception.
 */
export const RedriveFilter = {
  Redriven: "REDRIVEN",
  NotRedriven: "NOT_REDRIVEN",
} as const;
export type RedriveFilter = (typeof RedriveFilter)[keyof typeof RedriveFilter] | (string & {});

export const redriveFilterSchema: EnumSchema<RedriveFilter> = s.enumOf<RedriveFilter>(RedriveFilter);
