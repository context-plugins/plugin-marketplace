import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advancedSettingsParallelAiMonitorApiSchema,
  type AdvancedSettingsParallelAiMonitorApi,
} from "./unions/advanced-settings-parallel-ai-monitor-api.js";
import { includeBackfillSchema, type IncludeBackfill } from "./unions/include-backfill.js";
import { outputSchema1ModelSchema, type OutputSchema1Model } from "./unions/output-schema1-model.js";

/** Type-specific settings for an `event_stream` monitor. */
export type MonitorEventStreamSettings = {
  /** Search query to monitor for material changes. */
  query: string;
  /**
   * JSON schema that constrains and structures the event output. When set, events are returned as
   * JSON objects matching this schema instead of free-form text.
   */
  outputSchema?: OutputSchema1Model;
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

export const monitorEventStreamSettingsSchema: Schema<MonitorEventStreamSettings> =
  s.object<MonitorEventStreamSettings>(
    {
      query: s.string(),
      outputSchema: s.optional(s.lazy(() => outputSchema1ModelSchema)),
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
