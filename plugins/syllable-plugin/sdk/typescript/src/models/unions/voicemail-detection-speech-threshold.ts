import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VoicemailDetectionSpeechThreshold = number;

export const voicemailDetectionSpeechThresholdSchema: Schema<VoicemailDetectionSpeechThreshold> =
  s.of<VoicemailDetectionSpeechThreshold>(s.union([s.float64()]));
