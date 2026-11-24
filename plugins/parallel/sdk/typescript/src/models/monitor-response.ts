import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { processorSchema, type Processor } from "./processor.js";
import {
  statusParallelAiMonitorApiSchema,
  type StatusParallelAiMonitorApi,
} from "./status-parallel-ai-monitor-api.js";
import { type3Schema, type Type3 } from "./type3.js";
import { lastRunAtSchema, type LastRunAt } from "./unions/last-run-at.js";
import {
  metadataParallelAiMonitorApiSchema,
  type MetadataParallelAiMonitorApi,
} from "./unions/metadata-parallel-ai-monitor-api.js";
import {
  output1ParallelAiMonitorApiSchema,
  type Output1ParallelAiMonitorApi,
} from "./unions/output1-parallel-ai-monitor-api.js";
import { settings1Schema, type Settings1 } from "./unions/settings1.js";
import {
  webhook1ParallelAiMonitorApiSchema,
  type Webhook1ParallelAiMonitorApi,
} from "./unions/webhook1-parallel-ai-monitor-api.js";

/**
 * Response object for a monitor.
 *
 * The `type` field at the root determines the concrete shape of `settings`: `event_stream` uses
 * `MonitorEventStreamResponseSettings`, and `snapshot` uses `MonitorSnapshotResponseSettings`.
 * Snapshot monitors also carry an `output` field (`MonitorSnapshotOutput`) with the latest computed
 * state.
 */
export type MonitorResponse = {
  /** The type of monitor. */
  type: Type3;
  /** ID of the monitor. */
  monitorId: string;
  /** Status of the monitor. */
  status: StatusParallelAiMonitorApi;
  /**
   * Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or
   * 'w' (weeks). Must be between 1h and 30d (inclusive).
   */
  frequency: string;
  /**
   * Processor to use for the monitor. `lite` is faster and cheaper; `base` performs more thorough
   * analysis at higher cost and latency. Defaults to `lite`.
   */
  processor: Processor;
  /** Webhook configuration for the monitor. */
  webhook?: Webhook1ParallelAiMonitorApi;
  /**
   * User-provided metadata stored with the monitor and echoed back in webhook notifications and GET
   * responses, so you can map events to objects in your application. Keys: max 16 chars; values:
   * max 512 chars.
   */
  metadata?: MetadataParallelAiMonitorApi;
  /** Timestamp of the creation of the monitor, as an RFC 3339 string. */
  createdAt: Date;
  /** Timestamp of the last run for the monitor, as an RFC 3339 string. */
  lastRunAt?: LastRunAt;
  /**
   * Type-specific configuration. Shape is determined by `type`:
   * `MonitorEventStreamResponseSettings` for `event_stream`, `MonitorSnapshotResponseSettings` for
   * `snapshot`.
   */
  settings: Settings1;
  /**
   * Runtime output state. Present only for `snapshot` monitors; `null` for `event_stream` monitors.
   */
  output?: Output1ParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorResponseSchema: Schema<MonitorResponse> = s.object<MonitorResponse>(
  {
    type: type3Schema,
    monitorId: s.string(),
    status: statusParallelAiMonitorApiSchema,
    frequency: s.string(),
    processor: processorSchema,
    webhook: s.optional(s.lazy(() => webhook1ParallelAiMonitorApiSchema)),
    metadata: s.optional(s.lazy(() => metadataParallelAiMonitorApiSchema)),
    createdAt: s.dateTime(),
    lastRunAt: s.optional(s.lazy(() => lastRunAtSchema)),
    settings: settings1Schema,
    output: s.optional(s.lazy(() => output1ParallelAiMonitorApiSchema)),
    _keysMap: {
      monitorId: "monitor_id",
      createdAt: "created_at",
      lastRunAt: "last_run_at",
    },
  },
  { additionalProperties: s.json() },
);
