import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VoicemailDetectionPreSpeechTimeout = number;

export const voicemailDetectionPreSpeechTimeoutSchema: Schema<VoicemailDetectionPreSpeechTimeout> =
  s.of<VoicemailDetectionPreSpeechTimeout>(s.union([s.float64()]));
