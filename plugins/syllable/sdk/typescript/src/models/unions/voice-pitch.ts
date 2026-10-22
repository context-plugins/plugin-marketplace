import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Pitch of the voice in the range of -20.0 to 20.0. 20 means increase 20 semitones from the
 * original pitch. -20 means decrease 20 semitones from the original pitch. 0 means use the original
 * pitch. Only supported for Google configs.
 */
export type VoicePitch = number;

export const voicePitchSchema: Schema<VoicePitch> = s.of<VoicePitch>(s.union([s.float64()]));
