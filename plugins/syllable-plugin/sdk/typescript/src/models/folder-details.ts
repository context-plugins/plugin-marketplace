import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description22Schema, type Description22 } from "./unions/description22.js";
import { folderStatsSchema, type FolderStats } from "./unions/folder-stats.js";
import { label6Schema, type Label6 } from "./unions/label6.js";

/** Response model for an insight upload folder details. */
export type FolderDetails = {
  /** Human-readable name of insight folder */
  name: string;
  /** optional label assigned to insight folder */
  label?: Label6;
  /** Text description of insight upload folder */
  description?: Description22;
  /** System-assign folder ID */
  id: number;
  /** Timestamp at which insight upload folder was created */
  createdAt?: Date;
  /** Timestamp at which insight upload folder was last updated */
  updatedAt?: Date;
  /** Email of user who last updated upload folder */
  lastUpdatedBy: string;
  /** Meta-data of insight upload files associated with the folder */
  folderStats: Record<string, FolderStats>;
};

export const folderDetailsSchema: Schema<FolderDetails> = s.object<FolderDetails>({
  name: s.string(),
  label: s.optional(s.lazy(() => label6Schema)),
  description: s.optional(s.lazy(() => description22Schema)),
  id: s.int(),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  lastUpdatedBy: s.string(),
  folderStats: s.record(
    s.string(),
    s.lazy(() => folderStatsSchema),
  ),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
    folderStats: "folder_stats",
  },
});
