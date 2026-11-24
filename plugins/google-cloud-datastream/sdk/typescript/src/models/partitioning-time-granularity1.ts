import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Partition granularity. */
export const PartitioningTimeGranularity1 = {
  PartitioningTimeGranularityUnspecified: "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED",
  PartitioningTimeGranularityHour: "PARTITIONING_TIME_GRANULARITY_HOUR",
  PartitioningTimeGranularityDay: "PARTITIONING_TIME_GRANULARITY_DAY",
  PartitioningTimeGranularityMonth: "PARTITIONING_TIME_GRANULARITY_MONTH",
  PartitioningTimeGranularityYear: "PARTITIONING_TIME_GRANULARITY_YEAR",
} as const;
export type PartitioningTimeGranularity1 =
  | (typeof PartitioningTimeGranularity1)[keyof typeof PartitioningTimeGranularity1]
  | (string & {});

export const partitioningTimeGranularity1Schema: EnumSchema<PartitioningTimeGranularity1> =
  s.enumOf<PartitioningTimeGranularity1>(PartitioningTimeGranularity1);
