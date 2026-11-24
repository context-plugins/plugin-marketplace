import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recordingSchema, type Recording } from "./recording.js";

/** Response containing a single recording. */
export type RecordingResponse = {
  recording: Recording;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingResponseSchema: Schema<RecordingResponse> = s.object<RecordingResponse>(
  {
    recording: recordingSchema,
  },
  { additionalProperties: s.json() },
);
