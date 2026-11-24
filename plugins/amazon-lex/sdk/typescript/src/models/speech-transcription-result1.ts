import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The speech transcription success or failure of the test result evaluation item. */
export const SpeechTranscriptionResult1 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type SpeechTranscriptionResult1 =
  | (typeof SpeechTranscriptionResult1)[keyof typeof SpeechTranscriptionResult1]
  | (string & {});

export const speechTranscriptionResult1Schema: EnumSchema<SpeechTranscriptionResult1> =
  s.enumOf<SpeechTranscriptionResult1>(SpeechTranscriptionResult1);
