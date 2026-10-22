import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VoicemailDetectionPostSpeechTimeout = number;

export const voicemailDetectionPostSpeechTimeoutSchema: Schema<VoicemailDetectionPostSpeechTimeout> =
  s.of<VoicemailDetectionPostSpeechTimeout>(s.union([s.float64()]));
