import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  voicemailDetectionConfigSchema,
  type VoicemailDetectionConfig,
} from "../voicemail-detection-config.js";

/** Config for voicemail detection for voice campaigns. Set to None to disable. */
export type VoicemailDetection = VoicemailDetectionConfig;

export const voicemailDetectionSchema: Schema<VoicemailDetection> = s.of<VoicemailDetection>(
  s.union([s.lazy(() => voicemailDetectionConfigSchema)]),
);
