import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether the expected and actual speech transcriptions match or not, or if there is an
 * error in execution.
 */
export const SpeechTranscriptionResult2 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type SpeechTranscriptionResult2 =
  | (typeof SpeechTranscriptionResult2)[keyof typeof SpeechTranscriptionResult2]
  | (string & {});

export const speechTranscriptionResult2Schema: EnumSchema<SpeechTranscriptionResult2> =
  s.enumOf<SpeechTranscriptionResult2>(SpeechTranscriptionResult2);
