import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Speed of the voice in the range of 0.25 to 4.0 (OpenAI and Google) or 0.7 to 1.2 (ElevenLabs).
 * Standard speed is 1.0.
 */
export type VoiceSpeed = number;

export const voiceSpeedSchema: Schema<VoiceSpeed> = s.of<VoiceSpeed>(s.union([s.float64()]));
