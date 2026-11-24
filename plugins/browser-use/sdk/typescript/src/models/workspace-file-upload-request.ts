import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceFileUploadItemInternalSchema,
  workspaceFileUploadItemSchema,
  type WorkspaceFileUploadItem,
} from "./workspace-file-upload-item.js";

export type WorkspaceFileUploadRequest = {
  files: WorkspaceFileUploadItem[];
  /**
   * When false, return 409 before reserving storage if any uploaded filename would replace an
   * existing workspace file.
   *
   * @default true
   */
  allowOverrides?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspaceFileUploadRequestProperties: s.Shape<WorkspaceFileUploadRequest> = {
  files: s.array(s.lazy(() => workspaceFileUploadItemInternalSchema)),
  allowOverrides: s.defaulted(s.boolean(), true),
};

export const workspaceFileUploadRequestInternalSchema: Schema<WorkspaceFileUploadRequest> =
  s.object<WorkspaceFileUploadRequest>(workspaceFileUploadRequestProperties, {
    additionalProperties: s.json(),
  });

export const workspaceFileUploadRequestSchema: Schema<WorkspaceFileUploadRequest> = s.lazySchema(() =>
  s.object<WorkspaceFileUploadRequest>(
    {
      ...workspaceFileUploadRequestProperties,
      files: s.array(s.lazy(() => workspaceFileUploadItemSchema)).check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
