import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceFileUploadResponseItemSchema,
  type WorkspaceFileUploadResponseItem,
} from "./workspace-file-upload-response-item.js";

export type WorkspaceFileUploadResponse = {
  files: WorkspaceFileUploadResponseItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceFileUploadResponseSchema: Schema<WorkspaceFileUploadResponse> =
  s.object<WorkspaceFileUploadResponse>(
    {
      files: s.array(s.lazy(() => workspaceFileUploadResponseItemSchema)),
    },
    { additionalProperties: s.json() },
  );
