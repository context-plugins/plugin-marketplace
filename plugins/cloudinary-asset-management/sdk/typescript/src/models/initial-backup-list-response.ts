import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { initialBackupSummarySchema, type InitialBackupSummary } from "./initial-backup-summary.js";

export type InitialBackupListResponse = {
  /** The list of initial backup operations. */
  initialBackups: InitialBackupSummary[];
  /** Cursor for the next page of results. Present only when more results are available. */
  nextCursor?: string;
};

export const initialBackupListResponseSchema: Schema<InitialBackupListResponse> =
  s.object<InitialBackupListResponse>({
    initialBackups: s.array(s.lazy(() => initialBackupSummarySchema)),
    nextCursor: s.optional(s.string()),
    _keysMap: {
      initialBackups: "initial_backups",
      nextCursor: "next_cursor",
    },
  });
