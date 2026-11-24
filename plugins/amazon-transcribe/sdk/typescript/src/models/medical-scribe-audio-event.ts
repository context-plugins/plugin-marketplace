import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MedicalScribeAudioEvent = {
  /**
   * An audio blob containing the next segment of audio from your application, with a maximum
   * duration of 1 second. The maximum size in bytes varies based on audio properties. Find
   * recommended size in Transcribing streaming best practices. Size calculation: Duration (s) *
   * Sample Rate (Hz) * Number of Channels * 2 (Bytes per Sample) For example, a 1-second chunk of
   * 16 kHz, 2-channel, 16-bit audio would be 1 * 16000 * 2 * 2 = 64000 bytes. For 8 kHz, 1-channel,
   * 16-bit audio, a 1-second chunk would be 1 * 8000 * 1 * 2 = 16000 bytes.
   */
  audioChunk: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeAudioEventSchema: Schema<MedicalScribeAudioEvent> =
  s.object<MedicalScribeAudioEvent>(
    {
      audioChunk: s.string(),
      _keysMap: {
        audioChunk: "AudioChunk",
      },
    },
    { additionalProperties: s.json() },
  );
