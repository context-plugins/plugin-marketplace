import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VoicemailDetectionV2PreSpeechTimeout = number;

export const voicemailDetectionV2PreSpeechTimeoutSchema: Schema<VoicemailDetectionV2PreSpeechTimeout> =
  s.of<VoicemailDetectionV2PreSpeechTimeout>(s.union([s.float64()]));
