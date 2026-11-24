import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rddDataDistributionSchema, type RddDataDistribution } from "./rdd-data-distribution.js";
import { rddPartitionInfoSchema, type RddPartitionInfo } from "./rdd-partition-info.js";

/** Overall data about RDD storage. */
export type RddStorageInfo = {
  numCachedPartitions?: number;
  dataDistribution?: RddDataDistribution[];
  memoryUsed?: string;
  rddStorageId?: number;
  storageLevel?: string;
  diskUsed?: string;
  partitions?: RddPartitionInfo[];
  numPartitions?: number;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddStorageInfoSchema: Schema<RddStorageInfo> = s.object<RddStorageInfo>(
  {
    numCachedPartitions: s.optional(s.int()),
    dataDistribution: s.optional(s.array(s.lazy(() => rddDataDistributionSchema))),
    memoryUsed: s.optional(s.string()),
    rddStorageId: s.optional(s.int()),
    storageLevel: s.optional(s.string()),
    diskUsed: s.optional(s.string()),
    partitions: s.optional(s.array(s.lazy(() => rddPartitionInfoSchema))),
    numPartitions: s.optional(s.int()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
