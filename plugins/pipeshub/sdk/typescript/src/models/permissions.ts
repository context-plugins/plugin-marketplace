import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Present when `include=permissions`; otherwise `null`. */
export type Permissions = {
  role: string;
  canUpload: boolean;
  canCreateFolders: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canManagePermissions: boolean;
  /**
   * The caller's own role on the collection (knowledge base) this node is in, as restore and `GET
   * /knowledgeBase/{kbId}/trash` check it: OWNER, WRITER, FILEORGANIZER, COMMENTER or READER.
   * Unlike `role`, which ranks record permissions inside a folder, it is the same at every level of
   * the collection. Null outside a collection.
   */
  collectionRole?: string | null;
};

export const permissionsSchema: Schema<Permissions> = s.object<Permissions>({
  role: s.string(),
  canUpload: s.boolean(),
  canCreateFolders: s.boolean(),
  canEdit: s.boolean(),
  canDelete: s.boolean(),
  canManagePermissions: s.boolean(),
  collectionRole: s.optionalNullable(s.string()),
});
