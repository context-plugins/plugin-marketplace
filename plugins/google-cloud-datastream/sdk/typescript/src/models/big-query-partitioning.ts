import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ingestionTimePartition2Schema, type IngestionTimePartition2 } from "./ingestion-time-partition2.js";
import { integerRangePartition2Schema, type IntegerRangePartition2 } from "./integer-range-partition2.js";
import { timeUnitPartition2Schema, type TimeUnitPartition2 } from "./time-unit-partition2.js";

/** BigQuery partitioning configuration. */
export type BigQueryPartitioning = {
  /** Ingestion time partitioning. */
  ingestionTimePartition?: IngestionTimePartition2;
  /** Time unit column partitioning. */
  timeUnitPartition?: TimeUnitPartition2;
  /** Integer range partitioning. */
  integerRangePartition?: IntegerRangePartition2;
  /** Optional. If true, queries over the table require a partition filter. */
  requirePartitionFilter?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bigQueryPartitioningSchema: Schema<BigQueryPartitioning> = s.object<BigQueryPartitioning>(
  {
    ingestionTimePartition: s.optional(s.lazy(() => ingestionTimePartition2Schema)),
    timeUnitPartition: s.optional(s.lazy(() => timeUnitPartition2Schema)),
    integerRangePartition: s.optional(s.lazy(() => integerRangePartition2Schema)),
    requirePartitionFilter: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
