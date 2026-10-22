import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The folder move/rename request. */
export type MoveFolderRequest = {
  /** The new path for the folder. */
  toFolder: string;
};

export const moveFolderRequestSchema: Schema<MoveFolderRequest> = s.object<MoveFolderRequest>({
  toFolder: s.string(),
  _keysMap: {
    toFolder: "to_folder",
  },
});
