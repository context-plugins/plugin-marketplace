import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorMetricsSchema, type ExecutorMetrics } from "./executor-metrics.js";
import { memoryMetricsSchema, type MemoryMetrics } from "./memory-metrics.js";
import { resourceInformationSchema, type ResourceInformation } from "./resource-information.js";

/** Details about executors used by the application. */
export type ExecutorSummary = {
  hostPort?: string;
  totalTasks?: number;
  memoryMetrics?: MemoryMetrics;
  attributes?: Record<string, string>;
  totalDurationMillis?: string;
  maxTasks?: number;
  rddBlocks?: number;
  resources?: Record<string, ResourceInformation>;
  peakMemoryMetrics?: ExecutorMetrics;
  memoryUsed?: string;
  activeTasks?: number;
  totalShuffleWrite?: string;
  removeTime?: string;
  diskUsed?: string;
  maxMemory?: string;
  addTime?: string;
  totalShuffleRead?: string;
  totalCores?: number;
  totalInputBytes?: string;
  completedTasks?: number;
  isActive?: boolean;
  executorId?: string;
  removeReason?: string;
  excludedInStages?: string[];
  totalGcTimeMillis?: string;
  isExcluded?: boolean;
  resourceProfileId?: number;
  failedTasks?: number;
  executorLogs?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorSummarySchema: Schema<ExecutorSummary> = s.object<ExecutorSummary>(
  {
    hostPort: s.optional(s.string()),
    totalTasks: s.optional(s.int()),
    memoryMetrics: s.optional(s.lazy(() => memoryMetricsSchema)),
    attributes: s.optional(s.record(s.string(), s.string())),
    totalDurationMillis: s.optional(s.string()),
    maxTasks: s.optional(s.int()),
    rddBlocks: s.optional(s.int()),
    resources: s.optional(
      s.record(
        s.string(),
        s.lazy(() => resourceInformationSchema),
      ),
    ),
    peakMemoryMetrics: s.optional(s.lazy(() => executorMetricsSchema)),
    memoryUsed: s.optional(s.string()),
    activeTasks: s.optional(s.int()),
    totalShuffleWrite: s.optional(s.string()),
    removeTime: s.optional(s.string()),
    diskUsed: s.optional(s.string()),
    maxMemory: s.optional(s.string()),
    addTime: s.optional(s.string()),
    totalShuffleRead: s.optional(s.string()),
    totalCores: s.optional(s.int()),
    totalInputBytes: s.optional(s.string()),
    completedTasks: s.optional(s.int()),
    isActive: s.optional(s.boolean()),
    executorId: s.optional(s.string()),
    removeReason: s.optional(s.string()),
    excludedInStages: s.optional(s.array(s.string())),
    totalGcTimeMillis: s.optional(s.string()),
    isExcluded: s.optional(s.boolean()),
    resourceProfileId: s.optional(s.int()),
    failedTasks: s.optional(s.int()),
    executorLogs: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
