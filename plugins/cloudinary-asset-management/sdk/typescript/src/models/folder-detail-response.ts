import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderSchema, type Folder } from "./folder.js";

/**
 * The details of a folder. Returns the standard folder fields plus aggregation and ancestor fields
 * when available.
 */
export type FolderDetailResponse = {
  /** The name of the folder. */
  name: string;
  /** The full path of the folder. */
  path: string;
  /** The unique identifier for the folder. */
  externalId: string;
  /** The timestamp when the folder was created. */
  createdAt?: Date;
  /** The number of assets directly within the folder. */
  resourceCount?: number;
  /** The total size, in bytes, of the assets within the folder. */
  totalBytes?: number;
  /** The Unix timestamp of the most recent upload into the folder. */
  lastUploadedAt?: number | null;
  /** The ancestor folders of this folder, ordered from root to parent. */
  ancestors?: Folder[];
};

export const folderDetailResponseSchema: Schema<FolderDetailResponse> = s.object<FolderDetailResponse>({
  name: s.string(),
  path: s.string(),
  externalId: s.string(),
  createdAt: s.optional(s.dateTime()),
  resourceCount: s.optional(s.int()),
  totalBytes: s.optional(s.float64()),
  lastUploadedAt: s.optionalNullable(s.int()),
  ancestors: s.optional(s.array(s.lazy(() => folderSchema))),
  _keysMap: {
    externalId: "external_id",
    createdAt: "created_at",
    resourceCount: "resource_count",
    totalBytes: "total_bytes",
    lastUploadedAt: "last_uploaded_at",
  },
});
