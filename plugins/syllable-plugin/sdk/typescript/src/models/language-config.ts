import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentVoiceDisplayName3Schema, type AgentVoiceDisplayName3 } from "./agent-voice-display-name3.js";
import { languageCode1Schema, type LanguageCode1 } from "./language-code1.js";
import { ttsProvider2Schema, type TtsProvider2 } from "./tts-provider2.js";
import { voicePitchSchema, type VoicePitch } from "./unions/voice-pitch.js";
import { voiceSpeedSchema, type VoiceSpeed } from "./unions/voice-speed.js";

/**
 * Voice and DTMF configurations for a language in a language group. List of available voices and
 * their supported languages can be fetched from `GET /agents/voices/available/`.
 */
export type LanguageConfig = {
  /** BCP 47 code of the language */
  languageCode: LanguageCode1;
  /** TTS provider of the voice to use for the language */
  voiceProvider: TtsProvider2;
  /** Display name of the voice to use for the language */
  voiceDisplayName: AgentVoiceDisplayName3;
  /**
   * Speed of the voice in the range of 0.25 to 4.0 (OpenAI and Google) or 0.7 to 1.2 (ElevenLabs).
   * Standard speed is 1.0.
   */
  voiceSpeed?: VoiceSpeed;
  /**
   * Pitch of the voice in the range of -20.0 to 20.0. 20 means increase 20 semitones from the
   * original pitch. -20 means decrease 20 semitones from the original pitch. 0 means use the
   * original pitch. Only supported for Google configs.
   */
  voicePitch?: VoicePitch;
  /**
   * DTMF code that should be used for the language in the menu generated from the language group.
   */
  dtmfCode: number;
};

export const languageConfigSchema: Schema<LanguageConfig> = s.object<LanguageConfig>({
  languageCode: languageCode1Schema,
  voiceProvider: ttsProvider2Schema,
  voiceDisplayName: agentVoiceDisplayName3Schema,
  voiceSpeed: s.optional(s.lazy(() => voiceSpeedSchema)),
  voicePitch: s.optional(s.lazy(() => voicePitchSchema)),
  dtmfCode: s.int(),
  _keysMap: {
    languageCode: "language_code",
    voiceProvider: "voice_provider",
    voiceDisplayName: "voice_display_name",
    voiceSpeed: "voice_speed",
    voicePitch: "voice_pitch",
    dtmfCode: "dtmf_code",
  },
});
