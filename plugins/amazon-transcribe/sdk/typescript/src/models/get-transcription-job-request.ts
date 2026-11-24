import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetTranscriptionJobRequest = {
  /** The name of the transcription job you want information about. Job names are case sensitive. */
  transcriptionJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTranscriptionJobRequestSchema: Schema<GetTranscriptionJobRequest> =
  s.object<GetTranscriptionJobRequest>(
    {
      transcriptionJobName: s.string(),
      _keysMap: {
        transcriptionJobName: "TranscriptionJobName",
      },
    },
    { additionalProperties: s.json() },
  );
