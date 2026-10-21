import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned when a folder is created (root or nested subfolder) */
export type FolderCreateResponseSchema = {
  /** Unique folder identifier */
  id: string;
  /** Name of the folder */
  name: string;
};

export const folderCreateResponseSchemaSchema: Schema<FolderCreateResponseSchema> =
  s.object<FolderCreateResponseSchema>({
    id: s.string(),
    name: s.string(),
  });
