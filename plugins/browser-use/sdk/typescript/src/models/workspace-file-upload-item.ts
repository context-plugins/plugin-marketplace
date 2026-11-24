import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceFileUploadItem = {
  /** Filename, e.g. "data.csv" */
  name: string;
  /** MIME type, e.g. "text/csv" @default "application/octet-stream" */
  contentType?: string;
  /** Exact file size in bytes; the presigned URL is pinned to it. */
  size: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspaceFileUploadItemProperties: s.Shape<WorkspaceFileUploadItem> = {
  name: s.string(),
  contentType: s.defaulted(s.string(), "application/octet-stream"),
  size: s.int(),
};

export const workspaceFileUploadItemInternalSchema: Schema<WorkspaceFileUploadItem> =
  s.object<WorkspaceFileUploadItem>(workspaceFileUploadItemProperties, { additionalProperties: s.json() });

export const workspaceFileUploadItemSchema: Schema<WorkspaceFileUploadItem> = s.lazySchema(() =>
  s.object<WorkspaceFileUploadItem>(
    {
      ...workspaceFileUploadItemProperties,
      name: s.string().check(s.minLength(1), s.maxLength(255)),
      contentType: s.defaulted(s.string().check(s.maxLength(255)), "application/octet-stream"),
      size: s.int().check(s.gte(1), s.lte(52428800)),
    },
    { additionalProperties: s.json() },
  ),
);
