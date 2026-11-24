import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failedRowsSchema, type FailedRows } from "./failed-rows.js";
import { plannedRowsSchema, type PlannedRows } from "./planned-rows.js";
import { successfulRowsSchema, type SuccessfulRows } from "./successful-rows.js";
import { syncRunStatus1Schema, type SyncRunStatus1 } from "./sync-run-status1.js";

export type SyncRunHightouchSyncsApi = {
  /** The sync run's id */
  id: number;
  /**
   * The timestamp when sync run was created. In most cases this will be equivalent to `startedAt`,
   * but it may be earlier if the sync was triggered while a run was already in progress, and the
   * new run didn't start for a while.
   */
  createdAt: Date;
  /** The timestamp when the sync run started */
  startedAt: Date;
  /** The timestamp when the sync run finished */
  finishedAt: Date;
  /** The number of rows in the query. */
  querySize: number;
  /** The status of sync run */
  status: SyncRunStatus1;
  /** The completion ratio of sync run, showing the progress of a sync run */
  completionRatio: number;
  /**
   * The number of planned rows that this sync run was supposed to execute.
   *
   * Note that the counts for `successfulRows` and `failedRows` may not add up to `plannedRows` if
   * the sync was cancelled.
   */
  plannedRows: PlannedRows;
  /** The number of rows that were successfully processed by the destination. */
  successfulRows: SuccessfulRows;
  /**
   * The number of rows that we attempted to sync, but were rejected by the destination.
   *
   * This does not include rows that weren't attempted due to the sync being cancelled.
   */
  failedRows: FailedRows;
  /** Error message if the sync run didn't finish successfully */
  error?: string;
};

export const syncRunHightouchSyncsApiSchema: Schema<SyncRunHightouchSyncsApi> =
  s.object<SyncRunHightouchSyncsApi>({
    id: s.float64(),
    createdAt: s.dateTime(),
    startedAt: s.dateTime(),
    finishedAt: s.dateTime(),
    querySize: s.float64(),
    status: syncRunStatus1Schema,
    completionRatio: s.float64(),
    plannedRows: plannedRowsSchema,
    successfulRows: successfulRowsSchema,
    failedRows: failedRowsSchema,
    error: s.optional(s.string()),
  });
