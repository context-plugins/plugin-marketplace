import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monitorSnapshotOutputSchema, type MonitorSnapshotOutput } from "../monitor-snapshot-output.js";

/**
 * Runtime output state. Present only for `snapshot` monitors; `null` for `event_stream` monitors.
 */
export type Output1ParallelAiMonitorApi = MonitorSnapshotOutput;

export const output1ParallelAiMonitorApiSchema: Schema<Output1ParallelAiMonitorApi> =
  s.of<Output1ParallelAiMonitorApi>(s.union([s.lazy(() => monitorSnapshotOutputSchema)]));
