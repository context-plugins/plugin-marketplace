import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syncRunStatusSchema, type SyncRunStatus } from "./sync-run-status.js";

export type SyncRun = {
  finishedAt: string;
  syncId: number;
  /** The status of sync runs */
  status: SyncRunStatus;
  syncRunId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncRunSchema: Schema<SyncRun> = s.object<SyncRun>(
  {
    finishedAt: s.string(),
    syncId: s.float64(),
    status: syncRunStatusSchema,
    syncRunId: s.float64(),
  },
  { additionalProperties: s.json() },
);
