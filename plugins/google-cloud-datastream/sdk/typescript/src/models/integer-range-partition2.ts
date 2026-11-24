import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Integer range partitioning. */
export type IntegerRangePartition2 = {
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

export const integerRangePartition2Schema: Schema<IntegerRangePartition2> = s.object<IntegerRangePartition2>(
  {
    start: s.optional(s.string()),
    column: s.optional(s.string()),
    end: s.optional(s.string()),
    interval: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
