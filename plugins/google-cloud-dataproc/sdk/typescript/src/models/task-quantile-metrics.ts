import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputQuantileMetricsSchema, type InputQuantileMetrics } from "./input-quantile-metrics.js";
import { outputQuantileMetricsSchema, type OutputQuantileMetrics } from "./output-quantile-metrics.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";
import {
  shuffleReadQuantileMetricsSchema,
  type ShuffleReadQuantileMetrics,
} from "./shuffle-read-quantile-metrics.js";
import {
  shuffleWriteQuantileMetricsSchema,
  type ShuffleWriteQuantileMetrics,
} from "./shuffle-write-quantile-metrics.js";

export type TaskQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  schedulerDelayMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  executorCpuTimeNanos?: Quantiles;
  inputMetrics?: InputQuantileMetrics;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  diskBytesSpilled?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  executorRunTimeMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  resultSize?: Quantiles;
  shuffleReadMetrics?: ShuffleReadQuantileMetrics;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  executorDeserializeTimeMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  jvmGcTimeMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  resultSerializationTimeMillis?: Quantiles;
  outputMetrics?: OutputQuantileMetrics;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  executorDeserializeCpuTimeNanos?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  durationMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  peakExecutionMemoryBytes?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  gettingResultTimeMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  memoryBytesSpilled?: Quantiles;
  shuffleWriteMetrics?: ShuffleWriteQuantileMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskQuantileMetricsSchema: Schema<TaskQuantileMetrics> = s.object<TaskQuantileMetrics>(
  {
    schedulerDelayMillis: s.optional(s.lazy(() => quantilesSchema)),
    executorCpuTimeNanos: s.optional(s.lazy(() => quantilesSchema)),
    inputMetrics: s.optional(s.lazy(() => inputQuantileMetricsSchema)),
    diskBytesSpilled: s.optional(s.lazy(() => quantilesSchema)),
    executorRunTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
    resultSize: s.optional(s.lazy(() => quantilesSchema)),
    shuffleReadMetrics: s.optional(s.lazy(() => shuffleReadQuantileMetricsSchema)),
    executorDeserializeTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
    jvmGcTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
    resultSerializationTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
    outputMetrics: s.optional(s.lazy(() => outputQuantileMetricsSchema)),
    executorDeserializeCpuTimeNanos: s.optional(s.lazy(() => quantilesSchema)),
    durationMillis: s.optional(s.lazy(() => quantilesSchema)),
    peakExecutionMemoryBytes: s.optional(s.lazy(() => quantilesSchema)),
    gettingResultTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
    memoryBytesSpilled: s.optional(s.lazy(() => quantilesSchema)),
    shuffleWriteMetrics: s.optional(s.lazy(() => shuffleWriteQuantileMetricsSchema)),
  },
  { additionalProperties: s.json() },
);
