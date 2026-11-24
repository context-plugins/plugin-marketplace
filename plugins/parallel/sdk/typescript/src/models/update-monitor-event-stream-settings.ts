import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advancedSettingsParallelAiMonitorApiSchema,
  type AdvancedSettingsParallelAiMonitorApi,
} from "./unions/advanced-settings-parallel-ai-monitor-api.js";
import {
  queryParallelAiMonitorApiSchema,
  type QueryParallelAiMonitorApi,
} from "./unions/query-parallel-ai-monitor-api.js";

/** Type-specific update settings for an `event_stream` monitor. */
export type UpdateMonitorEventStreamSettings = {
  /**
   * Updated search query for the monitor. Use this for minor updates to prompts and instructions
   * only. Major changes to the query may lead to unexpected results in change detection, as the
   * monitor compares new results with what was previously seen.
   */
  query?: QueryParallelAiMonitorApi;
  /** Advanced monitor configuration. */
  advancedSettings?: AdvancedSettingsParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateMonitorEventStreamSettingsSchema: Schema<UpdateMonitorEventStreamSettings> =
  s.object<UpdateMonitorEventStreamSettings>(
    {
      query: s.optional(s.lazy(() => queryParallelAiMonitorApiSchema)),
      advancedSettings: s.optional(s.lazy(() => advancedSettingsParallelAiMonitorApiSchema)),
      _keysMap: {
        advancedSettings: "advanced_settings",
      },
    },
    { additionalProperties: s.json() },
  );
