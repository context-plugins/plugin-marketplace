import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderNamePathSchema, type FolderNamePath } from "./folder-name-path.js";

export type MoveFolderResponse = {
  from: FolderNamePath;
  to: FolderNamePath;
};

export const moveFolderResponseSchema: Schema<MoveFolderResponse> = s.object<MoveFolderResponse>({
  from: folderNamePathSchema,
  to: folderNamePathSchema,
});
