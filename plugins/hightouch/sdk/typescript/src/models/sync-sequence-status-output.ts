import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { syncRunSchema, type SyncRun } from "./sync-run.js";
import {
  syncSequenceRequestStatusSchema,
  type SyncSequenceRequestStatus,
} from "./sync-sequence-request-status.js";

/**
 * The status of a given sync sequence run at both a high level and the individual sync-run level.
 */
export type SyncSequenceStatusOutput = {
  id: string;
  status: SyncSequenceRequestStatus;
  syncRuns: SyncRun[];
};

export const syncSequenceStatusOutputSchema: Schema<SyncSequenceStatusOutput> =
  s.object<SyncSequenceStatusOutput>({
    id: s.string(),
    status: syncSequenceRequestStatusSchema,
    syncRuns: s.array(s.lazy(() => syncRunSchema)),
  });
