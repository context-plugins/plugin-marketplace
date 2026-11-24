import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mapRunExecutionCountsSchema, type MapRunExecutionCounts } from "./map-run-execution-counts.js";
import { mapRunItemCountsSchema, type MapRunItemCounts } from "./map-run-item-counts.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DescribeMapRunOutput = {
  /** The Amazon Resource Name (ARN) that identifies a Map Run. */
  mapRunArn: string;
  /**
   * The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.
   */
  executionArn: string;
  /** The current status of the Map Run. */
  status: Status1;
  /** The date when the Map Run was started. */
  startDate: Date;
  /** The date when the Map Run was stopped. */
  stopDate?: Date;
  /**
   * The maximum number of child workflow executions configured to run in parallel for the Map Run
   * at the same time.
   */
  maxConcurrency: number;
  /** The maximum percentage of failed child workflow executions before the Map Run fails. */
  toleratedFailurePercentage: number;
  /** The maximum number of failed child workflow executions before the Map Run fails. */
  toleratedFailureCount: number;
  itemCounts: MapRunItemCounts;
  executionCounts: MapRunExecutionCounts;
  /**
   * The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the
   * redriveCount is 0. This count is only updated if you successfully redrive a Map Run.
   */
  redriveCount?: number;
  /**
   * The date a Map Run was last redriven. If you have not yet redriven a Map Run, the redriveDate
   * is null.
   */
  redriveDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeMapRunOutputSchema: Schema<DescribeMapRunOutput> = s.object<DescribeMapRunOutput>(
  {
    mapRunArn: s.string(),
    executionArn: s.string(),
    status: status1Schema,
    startDate: s.dateTime(),
    stopDate: s.optional(s.dateTime()),
    maxConcurrency: s.int(),
    toleratedFailurePercentage: s.float64(),
    toleratedFailureCount: s.int(),
    itemCounts: mapRunItemCountsSchema,
    executionCounts: mapRunExecutionCountsSchema,
    redriveCount: s.optional(s.int()),
    redriveDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
