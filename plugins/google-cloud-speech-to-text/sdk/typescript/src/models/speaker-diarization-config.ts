import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Config to enable speaker diarization. */
export type SpeakerDiarizationConfig = {
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

export const speakerDiarizationConfigSchema: Schema<SpeakerDiarizationConfig> =
  s.object<SpeakerDiarizationConfig>(
    {
      speakerTag: s.optional(s.int()),
      maxSpeakerCount: s.optional(s.int()),
      enableSpeakerDiarization: s.optional(s.boolean()),
      minSpeakerCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
