import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Config to enable speaker diarization and set additional parameters to make diarization better
 * suited for your application. Note: When this is enabled, we send all the words from the beginning
 * of the audio for the top alternative in every consecutive STREAMING responses. This is done in
 * order to improve our speaker tags as our models learn to identify the speakers in the
 * conversation over time. For non-streaming requests, the diarization results will be provided only
 * in the top alternative of the FINAL SpeechRecognitionResult.
 */
export type SpeakerDiarizationConfig2 = {
  /**
   * Output only. Unused.
   *
   * @deprecated
   */
  speakerTag?: number;
  /**
   * Maximum number of speakers in the conversation. This range gives you more flexibility by
   * allowing the system to automatically determine the correct number of speakers. If not set, the
   * default value is 6.
   */
  maxSpeakerCount?: number;
  /**
   * If 'true', enables speaker detection for each recognized word in the top alternative of the
   * recognition result using a speaker_label provided in the WordInfo.
   */
  enableSpeakerDiarization?: boolean;
  /**
   * Minimum number of speakers in the conversation. This range gives you more flexibility by
   * allowing the system to automatically determine the correct number of speakers. If not set, the
   * default value is 2.
   */
  minSpeakerCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speakerDiarizationConfig2Schema: Schema<SpeakerDiarizationConfig2> =
  s.object<SpeakerDiarizationConfig2>(
    {
      speakerTag: s.optional(s.int()),
      maxSpeakerCount: s.optional(s.int()),
      enableSpeakerDiarization: s.optional(s.boolean()),
      minSpeakerCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
