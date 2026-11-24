import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Word-specific information for recognized words. */
export type WordInfo = {
  /**
   * The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater
   * likelihood that the recognized words are correct. This field is set only for the top
   * alternative of a non-streaming result or, of a streaming result where `is_final=true`. This
   * field is not guaranteed to be accurate and users should not rely on it to be always provided.
   * The default of 0.0 is a sentinel value indicating `confidence` was not set.
   */
  confidence?: number;
  /**
   * Output only. A label value assigned for every unique speaker within the audio. This field
   * specifies which speaker was detected to have spoken this word. For some models, like
   * medical_conversation this can be actual speaker role, for example "patient" or "provider", but
   * generally this would be a number identifying a speaker. This field is only set if
   * enable_speaker_diarization = 'true' and only for the top alternative.
   */
  speakerLabel?: string;
  /**
   * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken
   * word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis.
   * This is an experimental feature and the accuracy of the time offset can vary.
   */
  endTime?: string;
  /**
   * Output only. A distinct integer value is assigned for every speaker within the audio. This
   * field specifies which one of those speakers was detected to have spoken this word. Value ranges
   * from '1' to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization =
   * 'true' and only for the top alternative. Note: Use speaker_label instead.
   *
   * @deprecated
   */
  speakerTag?: number;
  /**
   * Time offset relative to the beginning of the audio, and corresponding to the start of the
   * spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top
   * hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
   */
  startTime?: string;
  /** The word corresponding to this set of information. */
  word?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wordInfoSchema: Schema<WordInfo> = s.object<WordInfo>(
  {
    confidence: s.optional(s.float64()),
    speakerLabel: s.optional(s.string()),
    endTime: s.optional(s.string()),
    speakerTag: s.optional(s.int()),
    startTime: s.optional(s.string()),
    word: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
