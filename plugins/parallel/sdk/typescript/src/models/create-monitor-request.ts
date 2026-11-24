import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Processor, processorSchema } from "./processor.js";
import {
  type2ParallelAiMonitorApiSchema,
  type Type2ParallelAiMonitorApi,
} from "./type2-parallel-ai-monitor-api.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";
import {
  metadataParallelAiMonitorApiSchema,
  type MetadataParallelAiMonitorApi,
} from "./unions/metadata-parallel-ai-monitor-api.js";
import { settingsSchema, type Settings } from "./unions/settings.js";
import {
  webhookParallelAiMonitorApiSchema,
  type WebhookParallelAiMonitorApi,
} from "./unions/webhook-parallel-ai-monitor-api.js";

/**
 * Request body to create a monitor.
 *
 * The `type` field at the root determines the expected shape of `settings`: `event_stream` requires
 * `MonitorEventStreamSettings`, and `snapshot` requires `MonitorSnapshotSettings`.
 */
export type CreateMonitorRequest = {
  /**
   * Type of monitor to create. `event_stream` monitors a search query for material changes;
   * `snapshot` monitors a specific task run's output. Determines the expected shape of `settings`.
   */
  type: Type2ParallelAiMonitorApi;
  /**
   * Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or
   * 'w' (weeks). Must be between 1h and 30d (inclusive).
   */
  frequency: string;
  /**
   * Processor to use for the monitor. `lite` is faster and cheaper; `base` performs more thorough
   * analysis at higher cost and latency. Defaults to `lite`.
   *
   * @default Processor.Lite
   */
  processor?: Processor;
  /** Webhook to receive notifications about the monitor's execution. */
  webhook?: WebhookParallelAiMonitorApi;
  /**
   * User-provided metadata stored with the monitor and echoed back in webhook notifications and GET
   * responses, so you can map events to objects in your application. Keys: max 16 chars; values:
   * max 512 chars.
   */
  metadata?: MetadataParallelAiMonitorApi;
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /**
   * Type-specific settings for the monitor. The expected shape is determined by the root `type`
   * field: pass `MonitorEventStreamSettings` when `type` is `event_stream`, and
   * `MonitorSnapshotSettings` when `type` is `snapshot`.
   */
  settings: Settings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createMonitorRequestProperties: s.Shape<CreateMonitorRequest> = {
  type: type2ParallelAiMonitorApiSchema,
  frequency: s.string(),
  processor: s.defaulted(processorSchema, Processor.Lite),
  webhook: s.optional(s.lazy(() => webhookParallelAiMonitorApiSchema)),
  metadata: s.optional(s.lazy(() => metadataParallelAiMonitorApiSchema)),
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  settings: settingsSchema,
  _keysMap: {
    memoryScopeKey: "memory_scope_key",
  },
};

export const createMonitorRequestInternalSchema: Schema<CreateMonitorRequest> =
  s.object<CreateMonitorRequest>(createMonitorRequestProperties, { additionalProperties: s.json() });

export const createMonitorRequestSchema: Schema<CreateMonitorRequest> = s.lazySchema(() =>
  s.object<CreateMonitorRequest>(
    {
      ...createMonitorRequestProperties,
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
