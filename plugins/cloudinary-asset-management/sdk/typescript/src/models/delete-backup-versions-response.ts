import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteBackupVersionsResponse = {
  /** A 32-character hexadecimal asset ID. */
  assetId: string;
  /** The list of version IDs that were successfully deleted. */
  deletedVersionIds: string[];
};

export const deleteBackupVersionsResponseSchema: Schema<DeleteBackupVersionsResponse> =
  s.object<DeleteBackupVersionsResponse>({
    assetId: s.string(),
    deletedVersionIds: s.array(s.string()),
    _keysMap: {
      assetId: "asset_id",
      deletedVersionIds: "deleted_version_ids",
    },
  });
