import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  streamedAudioTranscriptionDataSchema,
  type StreamedAudioTranscriptionData,
} from "./streamed-audio-transcription-data.js";

export type StreamedAudioTranscriptionResult = {
  data: StreamedAudioTranscriptionData;
};

export const streamedAudioTranscriptionResultSchema: Schema<StreamedAudioTranscriptionResult> =
  s.object<StreamedAudioTranscriptionResult>({
    data: streamedAudioTranscriptionDataSchema,
  });
