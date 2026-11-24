import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partitioningTimeGranularitySchema,
  type PartitioningTimeGranularity,
} from "./partitioning-time-granularity.js";

/** Ingestion time partitioning. */
export type IngestionTimePartition2 = {
  /** Optional. Partition granularity */
  partitioningTimeGranularity?: PartitioningTimeGranularity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ingestionTimePartition2Schema: Schema<IngestionTimePartition2> =
  s.object<IngestionTimePartition2>(
    {
      partitioningTimeGranularity: s.optional(s.lazy(() => partitioningTimeGranularitySchema)),
    },
    { additionalProperties: s.json() },
  );
