import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transcriptionJobSchema, type TranscriptionJob } from "./transcription-job.js";

export type StartTranscriptionJobResponse = {
  transcriptionJob?: TranscriptionJob;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTranscriptionJobResponseSchema: Schema<StartTranscriptionJobResponse> =
  s.object<StartTranscriptionJobResponse>(
    {
      transcriptionJob: s.optional(s.lazy(() => transcriptionJobSchema)),
      _keysMap: {
        transcriptionJob: "TranscriptionJob",
      },
    },
    { additionalProperties: s.json() },
  );
