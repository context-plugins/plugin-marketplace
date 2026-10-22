import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deletedBySchema, type DeletedBy } from "./deleted-by.js";

/**
 * What one delete removed (a folder with its contents, or every item of a multi-select); restoring
 * it brings back all of it.
 */
export type TrashItemSchema = {
  /** Record ID to restore */
  id: string;
  name?: string | null;
  recordType?: string | null;
  /** A folder, deleted with everything in it */
  isFolder: boolean;
  mimeType?: string | null;
  sizeInBytes?: number | null;
  /** The folder it was in; null at the collection's top level */
  parentId?: string | null;
  parentName?: string | null;
  /** That folder is in the trash too; restore it first */
  parentInTrash: boolean;
  /** Records this delete removed, all of which a restore brings back */
  itemCount: number;
  /**
   * Items selected in the delete; more than one for a multi-select delete, which is one item here
   */
  rootCount?: number;
  /** Names of up to three of the other items selected with this one */
  otherRootNames?: string[];
  deletedAtTimestamp: number;
  deletedBy?: DeletedBy | null;
  /** From when the scheduled cleanup may remove it for good; null when unknown */
  removableAfterTimestamp?: number | null;
};

export const trashItemSchemaSchema: Schema<TrashItemSchema> = s.object<TrashItemSchema>({
  id: s.string(),
  name: s.optionalNullable(s.string()),
  recordType: s.optionalNullable(s.string()),
  isFolder: s.boolean(),
  mimeType: s.optionalNullable(s.string()),
  sizeInBytes: s.optionalNullable(s.int()),
  parentId: s.optionalNullable(s.string()),
  parentName: s.optionalNullable(s.string()),
  parentInTrash: s.boolean(),
  itemCount: s.int(),
  rootCount: s.optional(s.int()),
  otherRootNames: s.optional(s.array(s.string())),
  deletedAtTimestamp: s.int(),
  deletedBy: s.optionalNullable(s.lazy(() => deletedBySchema)),
  removableAfterTimestamp: s.optionalNullable(s.int()),
});
