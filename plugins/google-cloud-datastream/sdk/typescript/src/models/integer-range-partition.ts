import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Integer range partitioning. see
 * https://cloud.google.com/bigquery/docs/partitioned-tables#integer_range
 */
export type IntegerRangePartition = {
  /** Required. The starting value for range partitioning (inclusive). */
  start?: string;
  /** Required. The partitioning column. */
  column?: string;
  /** Required. The ending value for range partitioning (exclusive). */
  end?: string;
  /** Required. The interval of each range within the partition. */
  interval?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integerRangePartitionSchema: Schema<IntegerRangePartition> = s.object<IntegerRangePartition>(
  {
    start: s.optional(s.string()),
    column: s.optional(s.string()),
    end: s.optional(s.string()),
    interval: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
