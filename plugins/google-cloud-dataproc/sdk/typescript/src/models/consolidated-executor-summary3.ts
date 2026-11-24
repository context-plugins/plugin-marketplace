import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { memoryMetricsSchema, type MemoryMetrics } from "./memory-metrics.js";

/** Consolidated summary for dead executors. */
export type ConsolidatedExecutorSummary3 = {
  activeTasks?: number;
  totalTasks?: number;
  rddBlocks?: number;
  memoryMetrics?: MemoryMetrics;
  failedTasks?: number;
  totalCores?: number;
  isExcluded?: number;
  diskUsed?: string;
  totalDurationMillis?: string;
  totalShuffleRead?: string;
  totalShuffleWrite?: string;
  totalGcTimeMillis?: string;
  totalInputBytes?: string;
  memoryUsed?: string;
  count?: number;
  maxMemory?: string;
  completedTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const consolidatedExecutorSummary3Schema: Schema<ConsolidatedExecutorSummary3> =
  s.object<ConsolidatedExecutorSummary3>(
    {
      activeTasks: s.optional(s.int()),
      totalTasks: s.optional(s.int()),
      rddBlocks: s.optional(s.int()),
      memoryMetrics: s.optional(s.lazy(() => memoryMetricsSchema)),
      failedTasks: s.optional(s.int()),
      totalCores: s.optional(s.int()),
      isExcluded: s.optional(s.int()),
      diskUsed: s.optional(s.string()),
      totalDurationMillis: s.optional(s.string()),
      totalShuffleRead: s.optional(s.string()),
      totalShuffleWrite: s.optional(s.string()),
      totalGcTimeMillis: s.optional(s.string()),
      totalInputBytes: s.optional(s.string()),
      memoryUsed: s.optional(s.string()),
      count: s.optional(s.int()),
      maxMemory: s.optional(s.string()),
      completedTasks: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
