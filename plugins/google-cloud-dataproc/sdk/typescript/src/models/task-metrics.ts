import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputMetricsSchema, type InputMetrics } from "./input-metrics.js";
import { outputMetricsSchema, type OutputMetrics } from "./output-metrics.js";
import { shuffleReadMetricsSchema, type ShuffleReadMetrics } from "./shuffle-read-metrics.js";
import { shuffleWriteMetricsSchema, type ShuffleWriteMetrics } from "./shuffle-write-metrics.js";

/** Executor Task Metrics */
export type TaskMetrics = {
  resultSize?: string;
  /** Shuffle data written by task. */
  shuffleWriteMetrics?: ShuffleWriteMetrics;
  executorCpuTimeNanos?: string;
  executorDeserializeCpuTimeNanos?: string;
  /** Metrics about the input data read by the task. */
  inputMetrics?: InputMetrics;
  diskBytesSpilled?: string;
  executorRunTimeMillis?: string;
  /** Shuffle data read by the task. */
  shuffleReadMetrics?: ShuffleReadMetrics;
  peakExecutionMemoryBytes?: string;
  /** Metrics about the data written by the task. */
  outputMetrics?: OutputMetrics;
  memoryBytesSpilled?: string;
  executorDeserializeTimeMillis?: string;
  jvmGcTimeMillis?: string;
  resultSerializationTimeMillis?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskMetricsSchema: Schema<TaskMetrics> = s.object<TaskMetrics>(
  {
    resultSize: s.optional(s.string()),
    shuffleWriteMetrics: s.optional(s.lazy(() => shuffleWriteMetricsSchema)),
    executorCpuTimeNanos: s.optional(s.string()),
    executorDeserializeCpuTimeNanos: s.optional(s.string()),
    inputMetrics: s.optional(s.lazy(() => inputMetricsSchema)),
    diskBytesSpilled: s.optional(s.string()),
    executorRunTimeMillis: s.optional(s.string()),
    shuffleReadMetrics: s.optional(s.lazy(() => shuffleReadMetricsSchema)),
    peakExecutionMemoryBytes: s.optional(s.string()),
    outputMetrics: s.optional(s.lazy(() => outputMetricsSchema)),
    memoryBytesSpilled: s.optional(s.string()),
    executorDeserializeTimeMillis: s.optional(s.string()),
    jvmGcTimeMillis: s.optional(s.string()),
    resultSerializationTimeMillis: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
