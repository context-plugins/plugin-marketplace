import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  audioTranscriptionInputTokenDetailsSchema,
  type AudioTranscriptionInputTokenDetails,
} from "../audio-transcription-input-token-details.js";

/** Details about the input tokens billed for this request. */
export type InputTokenDetails = AudioTranscriptionInputTokenDetails;

export const inputTokenDetailsSchema: Schema<InputTokenDetails> = s.of<InputTokenDetails>(
  s.union([s.lazy(() => audioTranscriptionInputTokenDetailsSchema)]),
);
