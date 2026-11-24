import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for POST /recordings/upload — the 201 confirming a recording was queued for import. */
export type RecordingUploadSubmitResponse = {
  recordingId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingUploadSubmitResponseSchema: Schema<RecordingUploadSubmitResponse> =
  s.object<RecordingUploadSubmitResponse>(
    {
      recordingId: s.string(),
      _keysMap: {
        recordingId: "recording_id",
      },
    },
    { additionalProperties: s.json() },
  );
