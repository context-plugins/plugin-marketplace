import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The identifier of the folder to retrieve. */
export type FolderByIdRequest = {
  /** The immutable identifier of the folder to retrieve. */
  id: string;
};

export const folderByIdRequestSchema: Schema<FolderByIdRequest> = s.object<FolderByIdRequest>({
  id: s.string(),
});
