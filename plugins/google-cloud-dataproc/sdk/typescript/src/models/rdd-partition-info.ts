import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about RDD partitions. */
export type RddPartitionInfo = {
  blockName?: string;
  memoryUsed?: string;
  executors?: string[];
  diskUsed?: string;
  storageLevel?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddPartitionInfoSchema: Schema<RddPartitionInfo> = s.object<RddPartitionInfo>(
  {
    blockName: s.optional(s.string()),
    memoryUsed: s.optional(s.string()),
    executors: s.optional(s.array(s.string())),
    diskUsed: s.optional(s.string()),
    storageLevel: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
