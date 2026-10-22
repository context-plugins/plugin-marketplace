import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FolderNamePath = {
  /** The name of the folder. */
  name: string;
  /** The full path of the folder. */
  path: string;
};

export const folderNamePathSchema: Schema<FolderNamePath> = s.object<FolderNamePath>({
  name: s.string(),
  path: s.string(),
});
