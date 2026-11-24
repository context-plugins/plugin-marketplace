import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { driveFolderSchema, type DriveFolder } from "./drive-folder.js";

export type ApiV1ManageFormsStorageFolderResponse = {
  /**
   * The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the
   * folder automatically.
   */
  folder: DriveFolder;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsStorageFolderResponseSchema: Schema<ApiV1ManageFormsStorageFolderResponse> =
  s.object<ApiV1ManageFormsStorageFolderResponse>(
    {
      folder: driveFolderSchema,
    },
    { additionalProperties: s.json() },
  );
