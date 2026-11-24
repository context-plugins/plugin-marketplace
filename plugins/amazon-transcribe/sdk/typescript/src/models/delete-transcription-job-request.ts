import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTranscriptionJobRequest = {
  /** The name of the transcription job you want to delete. Job names are case sensitive. */
  transcriptionJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTranscriptionJobRequestSchema: Schema<DeleteTranscriptionJobRequest> =
  s.object<DeleteTranscriptionJobRequest>(
    {
      transcriptionJobName: s.string(),
      _keysMap: {
        transcriptionJobName: "TranscriptionJobName",
      },
    },
    { additionalProperties: s.json() },
  );
