import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type classification of the folder */
export const FolderType = {
  Standard: "Standard",
  Personal: "Personal",
} as const;
export type FolderType = (typeof FolderType)[keyof typeof FolderType] | (string & {});

export const folderTypeSchema: EnumSchema<FolderType> = s.enumOf<FolderType>(FolderType);
