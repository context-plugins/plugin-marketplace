import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/**
 * The upload_api response: a recording's API-import identity and status, nothing else.
 *
 * Deliberately omits the full Recording payload (transcript, recaps, media URL, calendar metadata)
 * — this surface only reports what an API-upload client needs to poll an import to completion. The
 * recording's id is exposed as `recording_id` to match the submit endpoint (POST
 * /recordings/upload), which returns the same key.
 */
export type RecordingUpload = {
  recordingId?: string;
  title?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  status?: Status;
  failureReason?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingUploadSchema: Schema<RecordingUpload> = s.object<RecordingUpload>(
  {
    recordingId: s.optional(s.string()),
    title: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    status: s.optional(s.lazy(() => statusSchema)),
    failureReason: s.optionalNullable(s.string()),
    _keysMap: {
      recordingId: "recording_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      failureReason: "failure_reason",
    },
  },
  { additionalProperties: s.json() },
);
