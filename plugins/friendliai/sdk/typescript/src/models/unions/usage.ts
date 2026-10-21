import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { audioTranscriptionUsageSchema, type AudioTranscriptionUsage } from "../audio-transcription-usage.js";

export type Usage = AudioTranscriptionUsage;

export const usageSchema: Schema<Usage> = s.of<Usage>(s.union([s.lazy(() => audioTranscriptionUsageSchema)]));
