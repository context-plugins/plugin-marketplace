import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceFileUploadResponseItem = {
  /** Upload id. Pass THIS in RunCreateRequest.attachedFileIds to attach the file to a run. */
  id: string;
  /** Original filename from the request */
  name: string;
  /** Sanitized filename the object is stored under, e.g. "data.csv". */
  storedName: string;
  /** Path within the workspace, e.g. "uploads/data.csv" */
  path: string;
  /**
   * True if a file with this stored_name already exists in the workspace and uploading will replace
   * it. Surface a warning to the user.
   */
  willOverride: boolean;
  /**
   * Presigned PUT URL (5 min expiry). PUT the file bytes with the matching Content-Type and
   * Content-Length headers.
   */
  uploadUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceFileUploadResponseItemSchema: Schema<WorkspaceFileUploadResponseItem> =
  s.object<WorkspaceFileUploadResponseItem>(
    {
      id: s.string(),
      name: s.string(),
      storedName: s.string(),
      path: s.string(),
      willOverride: s.boolean(),
      uploadUrl: s.string(),
    },
    { additionalProperties: s.json() },
  );
