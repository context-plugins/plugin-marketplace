import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginatedResponseRecordingUploadSchema,
  type PaginatedResponseRecordingUpload,
} from "./paginated-response-recording-upload.js";

/** Response containing a paginated list of API-uploaded recordings with import status. */
export type RecordingUploadsListResponse = {
  uploads: PaginatedResponseRecordingUpload;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingUploadsListResponseSchema: Schema<RecordingUploadsListResponse> =
  s.object<RecordingUploadsListResponse>(
    {
      uploads: paginatedResponseRecordingUploadSchema,
    },
    { additionalProperties: s.json() },
  );
