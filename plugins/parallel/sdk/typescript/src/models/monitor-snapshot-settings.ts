import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Type-specific settings for a `snapshot` monitor. */
export type MonitorSnapshotSettings = {
  /** Task run ID whose output becomes the data and schema for the monitor. */
  taskRunId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSnapshotSettingsSchema: Schema<MonitorSnapshotSettings> =
  s.object<MonitorSnapshotSettings>(
    {
      taskRunId: s.string(),
      _keysMap: {
        taskRunId: "task_run_id",
      },
    },
    { additionalProperties: s.json() },
  );
