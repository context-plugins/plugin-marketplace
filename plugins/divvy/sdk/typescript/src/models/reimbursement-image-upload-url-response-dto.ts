import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API response for creating a reimbursement image upload URL. */
export type ReimbursementImageUploadUrlResponseDto = {
  /** Pre-signed URL for uploading a receipt */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reimbursementImageUploadUrlResponseDtoSchema: Schema<ReimbursementImageUploadUrlResponseDto> =
  s.object<ReimbursementImageUploadUrlResponseDto>(
    {
      url: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
