import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audioTranscriptionUsageSchema, type AudioTranscriptionUsage } from "./audio-transcription-usage.js";

export type AudioTranscriptionResult = {
  /** The transcribed text. */
  text: string;
  usage: AudioTranscriptionUsage;
};

export const audioTranscriptionResultSchema: Schema<AudioTranscriptionResult> =
  s.object<AudioTranscriptionResult>({
    text: s.string(),
    usage: audioTranscriptionUsageSchema,
  });
