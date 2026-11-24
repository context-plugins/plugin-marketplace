import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type TranscribestreamingTranscript = {
  /**
   * Contains a set of transcription results from one or more audio segments, along with additional
   * information per your request parameters. This can include information relating to alternative
   * transcriptions, channel identification, partial result stabilization, language identification,
   * and other transcription-related data.
   */
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcribestreamingTranscriptSchema: Schema<TranscribestreamingTranscript> =
  s.object<TranscribestreamingTranscript>(
    {
      results: s.optional(s.array(s.lazy(() => resultSchema))),
      _keysMap: {
        results: "Results",
      },
    },
    { additionalProperties: s.json() },
  );
