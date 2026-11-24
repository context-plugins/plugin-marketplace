import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latestSnapshotSchema, type LatestSnapshot } from "./unions/latest-snapshot.js";

/** Runtime output state for a `snapshot` monitor. */
export type MonitorSnapshotOutput = {
  /**
   * Task run output from the most recent completed execution of this snapshot monitor — same
   * structure as the output of the original task run the monitor was created from. `null` until the
   * first run completes.
   */
  latestSnapshot?: LatestSnapshot;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSnapshotOutputSchema: Schema<MonitorSnapshotOutput> = s.object<MonitorSnapshotOutput>(
  {
    latestSnapshot: s.optional(s.lazy(() => latestSnapshotSchema)),
    _keysMap: {
      latestSnapshot: "latest_snapshot",
    },
  },
  { additionalProperties: s.json() },
);
