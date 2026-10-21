import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AudioTranscriptionInputTokenDetails = {
  /** Number of audio tokens billed for this request. */
  audioTokens: number;
  /** Number of text tokens billed for this request. */
  textTokens: number;
};

export const audioTranscriptionInputTokenDetailsSchema: Schema<AudioTranscriptionInputTokenDetails> =
  s.object<AudioTranscriptionInputTokenDetails>({
    audioTokens: s.int(),
    textTokens: s.int(),
    _keysMap: {
      audioTokens: "audio_tokens",
      textTokens: "text_tokens",
    },
  });
