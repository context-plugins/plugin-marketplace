import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The path of the folder to retrieve. */
export type FolderByPathRequest = {
  /** The full path of the folder to retrieve. Use an empty string for the root folder. */
  path: string;
  /**
   * Whether to match the folder path case-sensitively. If false, the path is matched
   * case-insensitively.
   */
  caseSensitive?: boolean;
};

export const folderByPathRequestSchema: Schema<FolderByPathRequest> = s.object<FolderByPathRequest>({
  path: s.string(),
  caseSensitive: s.optional(s.boolean()),
  _keysMap: {
    caseSensitive: "case_sensitive",
  },
});
