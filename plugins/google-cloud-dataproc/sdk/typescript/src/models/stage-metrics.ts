import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageInputMetricsSchema, type StageInputMetrics } from "./stage-input-metrics.js";
import { stageOutputMetricsSchema, type StageOutputMetrics } from "./stage-output-metrics.js";
import { stageShuffleReadMetricsSchema, type StageShuffleReadMetrics } from "./stage-shuffle-read-metrics.js";
import {
  stageShuffleWriteMetricsSchema,
  type StageShuffleWriteMetrics,
} from "./stage-shuffle-write-metrics.js";

/** Stage Level Aggregated Metrics */
export type StageMetrics = {
  peakExecutionMemoryBytes?: string;
  executorDeserializeCpuTimeNanos?: string;
  diskBytesSpilled?: string;
  executorCpuTimeNanos?: string;
  executorRunTimeMillis?: string;
  memoryBytesSpilled?: string;
  /** Metrics about the input read by the stage. */
  stageInputMetrics?: StageInputMetrics;
  /** Shuffle data read for the stage. */
  stageShuffleReadMetrics?: StageShuffleReadMetrics;
  /** Shuffle data written for the stage. */
  stageShuffleWriteMetrics?: StageShuffleWriteMetrics;
  resultSerializationTimeMillis?: string;
  jvmGcTimeMillis?: string;
  /** Metrics about the output written by the stage. */
  stageOutputMetrics?: StageOutputMetrics;
  resultSize?: string;
  executorDeserializeTimeMillis?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageMetricsSchema: Schema<StageMetrics> = s.object<StageMetrics>(
  {
    peakExecutionMemoryBytes: s.optional(s.string()),
    executorDeserializeCpuTimeNanos: s.optional(s.string()),
    diskBytesSpilled: s.optional(s.string()),
    executorCpuTimeNanos: s.optional(s.string()),
    executorRunTimeMillis: s.optional(s.string()),
    memoryBytesSpilled: s.optional(s.string()),
    stageInputMetrics: s.optional(s.lazy(() => stageInputMetricsSchema)),
    stageShuffleReadMetrics: s.optional(s.lazy(() => stageShuffleReadMetricsSchema)),
    stageShuffleWriteMetrics: s.optional(s.lazy(() => stageShuffleWriteMetricsSchema)),
    resultSerializationTimeMillis: s.optional(s.string()),
    jvmGcTimeMillis: s.optional(s.string()),
    stageOutputMetrics: s.optional(s.lazy(() => stageOutputMetricsSchema)),
    resultSize: s.optional(s.string()),
    executorDeserializeTimeMillis: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
