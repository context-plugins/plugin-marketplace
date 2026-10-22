import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enableContentLoggingSchema, type EnableContentLogging } from "./unions/enable-content-logging.js";
import { maxBatchSizeSchema, type MaxBatchSize } from "./unions/max-batch-size.js";
import { maxContextLengthSchema, type MaxContextLength } from "./unions/max-context-length.js";
import { maxInputLengthSchema, type MaxInputLength } from "./unions/max-input-length.js";
import {
  queueBackpressureMetricKind1Schema,
  type QueueBackpressureMetricKind1,
} from "./unions/queue-backpressure-metric-kind1.js";
import {
  queueBackpressureMetricThresholdSchema,
  type QueueBackpressureMetricThreshold,
} from "./unions/queue-backpressure-metric-threshold.js";
import { queueTimeoutMsSchema, type QueueTimeoutMs } from "./unions/queue-timeout-ms.js";

/** Endpoint advanced config. */
export type EndpointAdvancedConfig = {
  maxBatchSize?: MaxBatchSize;
  tokenizerSkipSpecialTokens: boolean;
  tokenizerAddSpecialTokens: boolean;
  /** @default 2560 */
  maxTokenCount?: number;
  enableContentLogging?: EnableContentLogging;
  maxInputLength?: MaxInputLength;
  maxContextLength?: MaxContextLength;
  queueTimeoutMs?: QueueTimeoutMs;
  queueBackpressureMetricKind?: QueueBackpressureMetricKind1;
  queueBackpressureMetricThreshold?: QueueBackpressureMetricThreshold;
};

export const endpointAdvancedConfigSchema: Schema<EndpointAdvancedConfig> = s.object<EndpointAdvancedConfig>({
  maxBatchSize: s.optional(s.lazy(() => maxBatchSizeSchema)),
  tokenizerSkipSpecialTokens: s.boolean(),
  tokenizerAddSpecialTokens: s.boolean(),
  maxTokenCount: s.defaulted(s.int(), 2560),
  enableContentLogging: s.optional(s.lazy(() => enableContentLoggingSchema)),
  maxInputLength: s.optional(s.lazy(() => maxInputLengthSchema)),
  maxContextLength: s.optional(s.lazy(() => maxContextLengthSchema)),
  queueTimeoutMs: s.optional(s.lazy(() => queueTimeoutMsSchema)),
  queueBackpressureMetricKind: s.optional(s.lazy(() => queueBackpressureMetricKind1Schema)),
  queueBackpressureMetricThreshold: s.optional(s.lazy(() => queueBackpressureMetricThresholdSchema)),
  _keysMap: {
    maxBatchSize: "max_batch_size",
    tokenizerSkipSpecialTokens: "tokenizer_skip_special_tokens",
    tokenizerAddSpecialTokens: "tokenizer_add_special_tokens",
    maxTokenCount: "max_token_count",
    enableContentLogging: "enable_content_logging",
    maxInputLength: "max_input_length",
    maxContextLength: "max_context_length",
    queueTimeoutMs: "queue_timeout_ms",
    queueBackpressureMetricKind: "queue_backpressure_metric_kind",
    queueBackpressureMetricThreshold: "queue_backpressure_metric_threshold",
  },
});
