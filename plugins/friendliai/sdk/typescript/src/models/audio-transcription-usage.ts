import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputTokenDetailsSchema, type InputTokenDetails } from "./unions/input-token-details.js";

export type AudioTranscriptionUsage = {
  /** The type of the usage object. Always `tokens` for this variant. @default "tokens" */
  type?: "tokens";
  /** Number of input tokens billed for this request. */
  inputTokens: number;
  /** Number of output tokens generated. */
  outputTokens: number;
  /** Total number of tokens used (input + output). */
  totalTokens: number;
  /** The length of the input audio in milliseconds. */
  inputAudioLengthMs: number;
  /** The length of the processed audio in milliseconds. */
  processedAudioLengthMs: number;
  /** Details about the input tokens billed for this request. */
  inputTokenDetails?: InputTokenDetails;
};

export const audioTranscriptionUsageSchema: Schema<AudioTranscriptionUsage> =
  s.object<AudioTranscriptionUsage>({
    type: s.defaulted(s.literal("tokens"), "tokens"),
    inputTokens: s.int(),
    outputTokens: s.int(),
    totalTokens: s.int(),
    inputAudioLengthMs: s.int(),
    processedAudioLengthMs: s.int(),
    inputTokenDetails: s.optional(s.lazy(() => inputTokenDetailsSchema)),
    _keysMap: {
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
      totalTokens: "total_tokens",
      inputAudioLengthMs: "input_audio_length_ms",
      processedAudioLengthMs: "processed_audio_length_ms",
      inputTokenDetails: "input_token_details",
    },
  });
