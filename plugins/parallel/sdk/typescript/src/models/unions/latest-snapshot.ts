import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latestSnapshot1Schema, type LatestSnapshot1 } from "./latest-snapshot1.js";

/**
 * Task run output from the most recent completed execution of this snapshot monitor — same
 * structure as the output of the original task run the monitor was created from. `null` until the
 * first run completes.
 */
export type LatestSnapshot = LatestSnapshot1;

export const latestSnapshotSchema: Schema<LatestSnapshot> = s.of<LatestSnapshot>(
  s.union([s.lazy(() => latestSnapshot1Schema)]),
);
