import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A bundle upload, reserved in the caller's data folder under the format's size limit.
 *
 * Publish the uploaded file with ``POST /data/{file_id}/complete`` before importing it.
 */
export type ImportUploadRequest = {
  filename: string;
  sizeBytes: number;
  /** @default "application/octet-stream" */
  contentType?: string;
  /** @default "harbor" */
  format?: "harbor";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const importUploadRequestProperties: s.Shape<ImportUploadRequest> = {
  filename: s.string(),
  sizeBytes: s.int(),
  contentType: s.defaulted(s.string(), "application/octet-stream"),
  format: s.defaulted(s.literal("harbor"), "harbor"),
  _keysMap: {
    sizeBytes: "size_bytes",
    contentType: "content_type",
  },
};

export const importUploadRequestInternalSchema: Schema<ImportUploadRequest> = s.object<ImportUploadRequest>(
  importUploadRequestProperties,
  { additionalProperties: s.json() },
);

export const importUploadRequestSchema: Schema<ImportUploadRequest> = s.lazySchema(() =>
  s.object<ImportUploadRequest>(
    {
      ...importUploadRequestProperties,
      filename: s.string().check(s.minLength(1), s.maxLength(255)),
      sizeBytes: s.int().check(s.gte(0)),
      contentType: s.defaulted(
        s.string().check(s.minLength(3), s.maxLength(200)),
        "application/octet-stream",
      ),
    },
    { additionalProperties: s.json() },
  ),
);
