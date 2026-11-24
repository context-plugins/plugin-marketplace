import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  updateMonitorEventStreamSettingsSchema,
  type UpdateMonitorEventStreamSettings,
} from "../update-monitor-event-stream-settings.js";

/**
 * Type-specific settings to update. Only valid when `type` is `event_stream`. Pass `settings.query`
 * to update the prompt, or `null` for `settings.advanced_settings` to clear it.
 */
export type Settings2 = UpdateMonitorEventStreamSettings;

export const settings2Schema: Schema<Settings2> = s.of<Settings2>(
  s.union([s.lazy(() => updateMonitorEventStreamSettingsSchema)]),
);
