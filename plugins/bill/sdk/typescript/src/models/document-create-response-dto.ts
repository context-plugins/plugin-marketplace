import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Document response. */
export type DocumentCreateResponseDto = {
  /**
   * BILL-generated ID of the upload. This is a temporary BILL-generated ID for the document when
   * the upload is in progress. The value begins with `0du`.
   *
   * When the upload is complete, a new BILL-generated ID is available for the document. The value
   * begins with `00h`. You can get the document upload status with `GET
   * /v3/documents/upload-status`.
   */
  uploadId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentCreateResponseDtoSchema: Schema<DocumentCreateResponseDto> =
  s.object<DocumentCreateResponseDto>(
    {
      uploadId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
