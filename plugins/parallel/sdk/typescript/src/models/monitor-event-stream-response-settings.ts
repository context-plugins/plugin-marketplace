import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advancedSettingsParallelAiMonitorApiSchema,
  type AdvancedSettingsParallelAiMonitorApi,
} from "./unions/advanced-settings-parallel-ai-monitor-api.js";
import { includeBackfillSchema, type IncludeBackfill } from "./unions/include-backfill.js";
import { outputSchema2Schema, type OutputSchema2 } from "./unions/output-schema2.js";

/** Type-specific response fields for an `event_stream` monitor. */
export type MonitorEventStreamResponseSettings = {
  /** The search query being monitored. */
  query: string;
  /**
   * JSON schema that constrains and structures the event output. When set, events are returned as
   * JSON objects matching this schema.
   */
  outputSchema?: OutputSchema2;
  /**
   * If true, the first execution returns a sample of recent historical events matching the query
   * (preview only — not exhaustive). If false or omitted, only events from the monitor's creation
   * date onward are returned. Subsequent executions are always incremental.
   */
  includeBackfill?: IncludeBackfill;
  /** Advanced monitor configuration. */
  advancedSettings?: AdvancedSettingsParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorEventStreamResponseSettingsSchema: Schema<MonitorEventStreamResponseSettings> =
  s.object<MonitorEventStreamResponseSettings>(
    {
      query: s.string(),
      outputSchema: s.optional(s.lazy(() => outputSchema2Schema)),
      includeBackfill: s.optional(s.lazy(() => includeBackfillSchema)),
      advancedSettings: s.optional(s.lazy(() => advancedSettingsParallelAiMonitorApiSchema)),
      _keysMap: {
        outputSchema: "output_schema",
        includeBackfill: "include_backfill",
        advancedSettings: "advanced_settings",
      },
    },
    { additionalProperties: s.json() },
  );
