import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VoicemailDetectionOverallTimeout = number;

export const voicemailDetectionOverallTimeoutSchema: Schema<VoicemailDetectionOverallTimeout> =
  s.of<VoicemailDetectionOverallTimeout>(s.union([s.float64()]));
