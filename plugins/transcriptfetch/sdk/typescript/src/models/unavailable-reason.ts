import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Present when available is false: why AI transcription cannot be used. */
export const UnavailableReason = {
  UnsupportedInput: "unsupported_input",
  NoSpeechToTranscribe: "no_speech_to_transcribe",
  ContentInaccessible: "content_inaccessible",
  RetryCaptionsFirst: "retry_captions_first",
  InsufficientCredits: "insufficient_credits",
} as const;
export type UnavailableReason = (typeof UnavailableReason)[keyof typeof UnavailableReason] | (string & {});

export const unavailableReasonSchema: EnumSchema<UnavailableReason> =
  s.enumOf<UnavailableReason>(UnavailableReason);
