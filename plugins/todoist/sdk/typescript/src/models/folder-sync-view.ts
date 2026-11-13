import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FolderSyncView = {
  /** String ID of the folder. */
  id: string;
  /** Folder name. */
  name: string;
  /** String ID of the workspace that contains the folder. */
  workspaceId: string;
  /** Default position of the folder in the workspace. */
  defaultOrder: number;
  /**
   * Fractional-indexing key for the workspace's shared default-ordering scope (folders and
   * workspace projects together). `null` until assigned (backfill pending).
   */
  defaultOrderKey: string | null;
  /** User-specific position of the folder. */
  childOrder: number;
  /** Whether the folder is deleted. */
  isDeleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const folderSyncViewSchema: Schema<FolderSyncView> = s.object<FolderSyncView>(
  {
    id: s.string(),
    name: s.string(),
    workspaceId: s.string(),
    defaultOrder: s.int(),
    defaultOrderKey: s.nullable(s.string()),
    childOrder: s.int(),
    isDeleted: s.boolean(),
    _keysMap: {
      workspaceId: "workspace_id",
      defaultOrder: "default_order",
      defaultOrderKey: "default_order_key",
      childOrder: "child_order",
      isDeleted: "is_deleted",
    },
  },
  { additionalProperties: s.json() },
);
