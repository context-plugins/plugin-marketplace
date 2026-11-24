import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Partition granularity */
export const PartitioningTimeGranularity = {
  PartitioningTimeGranularityUnspecified: "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED",
  PartitioningTimeGranularityHour: "PARTITIONING_TIME_GRANULARITY_HOUR",
  PartitioningTimeGranularityDay: "PARTITIONING_TIME_GRANULARITY_DAY",
  PartitioningTimeGranularityMonth: "PARTITIONING_TIME_GRANULARITY_MONTH",
  PartitioningTimeGranularityYear: "PARTITIONING_TIME_GRANULARITY_YEAR",
} as const;
export type PartitioningTimeGranularity =
  | (typeof PartitioningTimeGranularity)[keyof typeof PartitioningTimeGranularity]
  | (string & {});

export const partitioningTimeGranularitySchema: EnumSchema<PartitioningTimeGranularity> =
  s.enumOf<PartitioningTimeGranularity>(PartitioningTimeGranularity);
