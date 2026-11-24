import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The speech transcription success or failure details of the conversation. */
export const SpeechTranscriptionResult = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type SpeechTranscriptionResult =
  | (typeof SpeechTranscriptionResult)[keyof typeof SpeechTranscriptionResult]
  | (string & {});

export const speechTranscriptionResultSchema: EnumSchema<SpeechTranscriptionResult> =
  s.enumOf<SpeechTranscriptionResult>(SpeechTranscriptionResult);
