import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entryModelSchema, type EntryModel } from "./entry-model.js";

/**
 * Transcription normalization configuration. Use transcription normalization to automatically
 * replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this
 * normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.
 */
export type TranscriptNormalization = {
  /**
   * A list of replacement entries. We will perform replacement with one entry at a time. For
   * example, the second entry in ["cat" => "dog", "mountain cat" => "mountain dog"] will never be
   * applied because we will always process the first entry before it. At most 100 entries.
   */
  entries?: EntryModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptNormalizationSchema: Schema<TranscriptNormalization> =
  s.object<TranscriptNormalization>(
    {
      entries: s.optional(s.array(s.lazy(() => entryModelSchema))),
    },
    { additionalProperties: s.json() },
  );
