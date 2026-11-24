import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginatedResponseRecordingSchema,
  type PaginatedResponseRecording,
} from "./paginated-response-recording.js";

/** Response containing a paginated list of recordings. */
export type RecordingsListResponse = {
  recordings: PaginatedResponseRecording;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingsListResponseSchema: Schema<RecordingsListResponse> = s.object<RecordingsListResponse>(
  {
    recordings: paginatedResponseRecordingSchema,
  },
  { additionalProperties: s.json() },
);
