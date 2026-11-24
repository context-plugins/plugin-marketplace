import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  monitorEventStreamSettingsSchema,
  type MonitorEventStreamSettings,
} from "../monitor-event-stream-settings.js";
import { monitorSnapshotSettingsSchema, type MonitorSnapshotSettings } from "../monitor-snapshot-settings.js";

/**
 * Type-specific settings for the monitor. The expected shape is determined by the root `type`
 * field: pass `MonitorEventStreamSettings` when `type` is `event_stream`, and
 * `MonitorSnapshotSettings` when `type` is `snapshot`.
 */
export type Settings = MonitorEventStreamSettings | MonitorSnapshotSettings;

export const settingsSchema: Schema<Settings> = s.of<Settings>(
  s.union([s.lazy(() => monitorEventStreamSettingsSchema), s.lazy(() => monitorSnapshotSettingsSchema)]),
);
