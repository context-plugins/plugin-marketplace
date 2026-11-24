import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether or not an execution can be redriven at a given point in time. For executions of
 * type STANDARD, redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action would
 * return the ExecutionNotRedrivable error. For a Distributed Map that includes child workflows of
 * type STANDARD, redriveStatus indicates whether or not the Map Run can redrive child workflow
 * executions. For a Distributed Map that includes child workflows of type EXPRESS, redriveStatus
 * indicates whether or not the Map Run can redrive child workflow executions. You can redrive
 * failed or timed out EXPRESS wo
 */
export const RedriveStatus = {
  Redrivable: "REDRIVABLE",
  NotRedrivable: "NOT_REDRIVABLE",
  RedrivableByMapRun: "REDRIVABLE_BY_MAP_RUN",
} as const;
export type RedriveStatus = (typeof RedriveStatus)[keyof typeof RedriveStatus] | (string & {});

export const redriveStatusSchema: EnumSchema<RedriveStatus> = s.enumOf<RedriveStatus>(RedriveStatus);
