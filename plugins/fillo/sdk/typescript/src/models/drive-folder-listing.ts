import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { driveFolderSchema, type DriveFolder } from "./drive-folder.js";
import { folderSchema, type Folder } from "./folder.js";

export type DriveFolderListing = {
  /**
   * The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the
   * folder automatically.
   */
  folder: DriveFolder;
  /** Writable My Drive folders on the connected account. */
  folders: Folder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const driveFolderListingSchema: Schema<DriveFolderListing> = s.object<DriveFolderListing>(
  {
    folder: driveFolderSchema,
    folders: s.array(s.lazy(() => folderSchema)),
  },
  { additionalProperties: s.json() },
);
