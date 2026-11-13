import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FolderView = {
  /** String ID of the workspace that contains the folder. */
  workspaceId: string;
  /** Folder name. */
  name?: string;
  /** Whether the folder is deleted. @default false */
  isDeleted?: boolean;
  /** String ID of the folder. @default "0" */
  id?: string;
  /** Default position of the folder in the workspace. @default 0 */
  defaultOrder?: number;
  /**
   * Fractional-indexing key for the workspace's shared default-ordering scope (folders and
   * workspace projects together). `null` until assigned (backfill pending).
   */
  defaultOrderKey?: string | null;
  /** User-specific position of the folder. @default 0 */
  childOrder?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const folderViewSchema: Schema<FolderView> = s.object<FolderView>(
  {
    workspaceId: s.string(),
    name: s.optional(s.string()),
    isDeleted: s.defaulted(s.boolean(), false),
    id: s.defaulted(s.string(), "0"),
    defaultOrder: s.defaulted(s.int(), 0),
    defaultOrderKey: s.optionalNullable(s.string()),
    childOrder: s.defaulted(s.int(), 0),
    _keysMap: {
      workspaceId: "workspace_id",
      isDeleted: "is_deleted",
      defaultOrder: "default_order",
      defaultOrderKey: "default_order_key",
      childOrder: "child_order",
    },
  },
  { additionalProperties: s.json() },
);
