import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partitioningTimeGranularity1Schema,
  type PartitioningTimeGranularity1,
} from "./partitioning-time-granularity1.js";

/** Time unit column partitioning. */
export type TimeUnitPartition2 = {
  /** Optional. Partition granularity. */
  partitioningTimeGranularity?: PartitioningTimeGranularity1;
  /** Required. The partitioning column. */
  column?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeUnitPartition2Schema: Schema<TimeUnitPartition2> = s.object<TimeUnitPartition2>(
  {
    partitioningTimeGranularity: s.optional(s.lazy(() => partitioningTimeGranularity1Schema)),
    column: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
