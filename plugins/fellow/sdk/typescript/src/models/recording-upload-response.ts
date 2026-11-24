import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recordingUploadSchema, type RecordingUpload } from "./recording-upload.js";

/** Response containing a single API-uploaded recording with its import status. */
export type RecordingUploadResponse = {
  /**
   * The upload_api response: a recording's API-import identity and status, nothing else.
   *
   * Deliberately omits the full Recording payload (transcript, recaps, media URL, calendar
   * metadata) — this surface only reports what an API-upload client needs to poll an import to
   * completion. The recording's id is exposed as `recording_id` to match the submit endpoint (POST
   * /recordings/upload), which returns the same key.
   */
  upload: RecordingUpload;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingUploadResponseSchema: Schema<RecordingUploadResponse> =
  s.object<RecordingUploadResponse>(
    {
      upload: recordingUploadSchema,
    },
    { additionalProperties: s.json() },
  );
