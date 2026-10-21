import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackupVersionFailure = {
  /** The version ID that failed to delete. */
  versionId?: string;
  /** The error message explaining the failure. */
  error?: string;
};

export const backupVersionFailureSchema: Schema<BackupVersionFailure> = s.object<BackupVersionFailure>({
  versionId: s.optional(s.string()),
  error: s.optional(s.string()),
  _keysMap: {
    versionId: "version_id",
  },
});
