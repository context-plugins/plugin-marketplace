import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateUploadUrlResponse = {
  /** An identifier for a unique import job. Use it when you call the StartImport operation. */
  importId?: string;
  /**
   * A pre-signed S3 write URL. Upload the zip archive file that contains the definition of your bot
   * or bot locale.
   */
  uploadUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createUploadUrlResponseSchema: Schema<CreateUploadUrlResponse> =
  s.object<CreateUploadUrlResponse>(
    {
      importId: s.optional(s.string()),
      uploadUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
