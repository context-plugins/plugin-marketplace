import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  monitorEventStreamResponseSettingsSchema,
  type MonitorEventStreamResponseSettings,
} from "../monitor-event-stream-response-settings.js";
import {
  monitorSnapshotResponseSettingsSchema,
  type MonitorSnapshotResponseSettings,
} from "../monitor-snapshot-response-settings.js";

/**
 * Type-specific configuration. Shape is determined by `type`: `MonitorEventStreamResponseSettings`
 * for `event_stream`, `MonitorSnapshotResponseSettings` for `snapshot`.
 */
export type Settings1 = MonitorEventStreamResponseSettings | MonitorSnapshotResponseSettings;

export const settings1Schema: Schema<Settings1> = s.of<Settings1>(
  s.union([
    s.lazy(() => monitorEventStreamResponseSettingsSchema),
    s.lazy(() => monitorSnapshotResponseSettingsSchema),
  ]),
);
