import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MemoryMetrics = {
  usedOnHeapStorageMemory?: string;
  totalOffHeapStorageMemory?: string;
  usedOffHeapStorageMemory?: string;
  totalOnHeapStorageMemory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memoryMetricsSchema: Schema<MemoryMetrics> = s.object<MemoryMetrics>(
  {
    usedOnHeapStorageMemory: s.optional(s.string()),
    totalOffHeapStorageMemory: s.optional(s.string()),
    usedOffHeapStorageMemory: s.optional(s.string()),
    totalOnHeapStorageMemory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
