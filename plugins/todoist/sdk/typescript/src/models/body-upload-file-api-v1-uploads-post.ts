import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyUploadFileApiV1UploadsPost = {
  /**
   * Name for the uploaded file. If not provided, will be extracted from Content-Disposition header
   * (multipart) or X-File-Name header (raw binary).
   */
  fileName?: string | null;
  /** Project ID to apply workspace-specific upload limits when uploading to a workspace project. */
  projectId?: string | null;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyUploadFileApiV1UploadsPostSchema: Schema<BodyUploadFileApiV1UploadsPost> =
  s.object<BodyUploadFileApiV1UploadsPost>(
    {
      fileName: s.optionalNullable(s.string()),
      projectId: s.optionalNullable(s.string()),
      file: s.bytes(),
      _keysMap: {
        fileName: "file_name",
        projectId: "project_id",
      },
    },
    { additionalProperties: s.json() },
  );
