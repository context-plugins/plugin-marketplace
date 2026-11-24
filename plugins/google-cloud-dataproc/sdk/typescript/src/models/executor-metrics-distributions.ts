import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  executorPeakMetricsDistributionsSchema,
  type ExecutorPeakMetricsDistributions,
} from "./executor-peak-metrics-distributions.js";

export type ExecutorMetricsDistributions = {
  quantiles?: number[];
  killedTasks?: number[];
  shuffleWrite?: number[];
  shuffleReadRecords?: number[];
  shuffleWriteRecords?: number[];
  taskTimeMillis?: number[];
  inputBytes?: number[];
  diskBytesSpilled?: number[];
  inputRecords?: number[];
  failedTasks?: number[];
  outputRecords?: number[];
  peakMemoryMetrics?: ExecutorPeakMetricsDistributions;
  outputBytes?: number[];
  memoryBytesSpilled?: number[];
  succeededTasks?: number[];
  shuffleRead?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorMetricsDistributionsSchema: Schema<ExecutorMetricsDistributions> =
  s.object<ExecutorMetricsDistributions>(
    {
      quantiles: s.optional(s.array(s.float64())),
      killedTasks: s.optional(s.array(s.float64())),
      shuffleWrite: s.optional(s.array(s.float64())),
      shuffleReadRecords: s.optional(s.array(s.float64())),
      shuffleWriteRecords: s.optional(s.array(s.float64())),
      taskTimeMillis: s.optional(s.array(s.float64())),
      inputBytes: s.optional(s.array(s.float64())),
      diskBytesSpilled: s.optional(s.array(s.float64())),
      inputRecords: s.optional(s.array(s.float64())),
      failedTasks: s.optional(s.array(s.float64())),
      outputRecords: s.optional(s.array(s.float64())),
      peakMemoryMetrics: s.optional(s.lazy(() => executorPeakMetricsDistributionsSchema)),
      outputBytes: s.optional(s.array(s.float64())),
      memoryBytesSpilled: s.optional(s.array(s.float64())),
      succeededTasks: s.optional(s.array(s.float64())),
      shuffleRead: s.optional(s.array(s.float64())),
    },
    { additionalProperties: s.json() },
  );
