import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A pre-signed URL for uploading build artifacts. */
export type UploadUrlResponse = {
  /** The pre-signed URL to use for uploading the build artifact file. */
  uploadUrl?: string;
  /** Unique identifier for this upload, used when creating a deployment. */
  uploadUid?: string;
  /** ISO 8601 timestamp when the pre-signed URL expires (10 minutes). */
  expiresAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadUrlResponseProperties: s.Shape<UploadUrlResponse> = {
  uploadUrl: s.optional(s.string()),
  uploadUid: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  _keysMap: {
    uploadUrl: "upload_url",
    uploadUid: "upload_uid",
    expiresAt: "expires_at",
  },
};

export const uploadUrlResponseInternalSchema: Schema<UploadUrlResponse> = s.object<UploadUrlResponse>(
  uploadUrlResponseProperties,
  { additionalProperties: s.json() },
);

export const uploadUrlResponseSchema: Schema<UploadUrlResponse> = s.lazySchema(() =>
  s.object<UploadUrlResponse>(
    {
      ...uploadUrlResponseProperties,
      uploadUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
