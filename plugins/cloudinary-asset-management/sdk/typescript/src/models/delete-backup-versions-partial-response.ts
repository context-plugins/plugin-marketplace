import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backupVersionFailureSchema, type BackupVersionFailure } from "./backup-version-failure.js";

export type DeleteBackupVersionsPartialResponse = {
  /** A 32-character hexadecimal asset ID. */
  assetId: string;
  /** The list of version IDs that were successfully deleted. */
  deletedVersionIds: string[];
  /** The list of version IDs that failed to delete with error messages. */
  failures?: BackupVersionFailure[];
};

export const deleteBackupVersionsPartialResponseSchema: Schema<DeleteBackupVersionsPartialResponse> =
  s.object<DeleteBackupVersionsPartialResponse>({
    assetId: s.string(),
    deletedVersionIds: s.array(s.string()),
    failures: s.optional(s.array(s.lazy(() => backupVersionFailureSchema))),
    _keysMap: {
      assetId: "asset_id",
      deletedVersionIds: "deleted_version_ids",
    },
  });
