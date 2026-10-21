import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of folder IDs */
export type FolderList = number[];

export const folderListSchema: Schema<FolderList> = s.of<FolderList>(s.union([s.array(s.int())]));
