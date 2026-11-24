import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scanStatusSchema, type ScanStatus } from "./scan-status.js";
import { uploadStatusSchema, type UploadStatus } from "./upload-status.js";

/** Get document upload status response. */
export type DocumentUploadStatusResponseDto = {
  /** BILL-generated ID of the document. The value begins with `00h`. */
  documentId?: string;
  /** BILL-generated ID of the document upload. The value begins with `0du`. */
  uploadId?: string;
  status?: UploadStatus;
  scanStatus?: ScanStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentUploadStatusResponseDtoSchema: Schema<DocumentUploadStatusResponseDto> =
  s.object<DocumentUploadStatusResponseDto>(
    {
      documentId: s.optional(s.string()),
      uploadId: s.optional(s.string()),
      status: s.optional(s.lazy(() => uploadStatusSchema)),
      scanStatus: s.optional(s.lazy(() => scanStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
