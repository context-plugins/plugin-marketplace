import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wordInfoSchema, type WordInfo } from "./word-info.js";

/** Alternative hypotheses (a.k.a. n-best list). */
export type SpeechRecognitionAlternative = {
  /**
   * A list of word-specific information for each recognized word. Note: When
   * `enable_speaker_diarization` is true, you will see all the words from the beginning of the
   * audio.
   */
  words?: WordInfo[];
  /**
   * Transcript text representing the words that the user spoke. In languages that use spaces to
   * separate words, the transcript might have a leading space if it isn't the first result. You can
   * concatenate each result to obtain the full transcript without using a separator.
   */
  transcript?: string;
  /**
   * The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater
   * likelihood that the recognized words are correct. This field is set only for the top
   * alternative of a non-streaming result or, of a streaming result where `is_final=true`. This
   * field is not guaranteed to be accurate and users should not rely on it to be always provided.
   * The default of 0.0 is a sentinel value indicating `confidence` was not set.
   */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechRecognitionAlternativeSchema: Schema<SpeechRecognitionAlternative> =
  s.object<SpeechRecognitionAlternative>(
    {
      words: s.optional(s.array(s.lazy(() => wordInfoSchema))),
      transcript: s.optional(s.string()),
      confidence: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
