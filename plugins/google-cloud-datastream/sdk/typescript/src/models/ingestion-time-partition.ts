import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partitioningTimeGranularitySchema,
  type PartitioningTimeGranularity,
} from "./partitioning-time-granularity.js";

/**
 * Ingestion time partitioning. see
 * https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time
 */
export type IngestionTimePartition = {
  /** Optional. Partition granularity */
  partitioningTimeGranularity?: PartitioningTimeGranularity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ingestionTimePartitionSchema: Schema<IngestionTimePartition> = s.object<IngestionTimePartition>(
  {
    partitioningTimeGranularity: s.optional(s.lazy(() => partitioningTimeGranularitySchema)),
  },
  { additionalProperties: s.json() },
);
