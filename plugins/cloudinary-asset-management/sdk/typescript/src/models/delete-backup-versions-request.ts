import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteBackupVersionsRequest = {
  /** The list of version IDs to delete from backup. */
  versionIds: string[];
};

export const deleteBackupVersionsRequestSchema: Schema<DeleteBackupVersionsRequest> =
  s.object<DeleteBackupVersionsRequest>({
    versionIds: s.array(s.string()),
    _keysMap: {
      versionIds: "version_ids",
    },
  });
