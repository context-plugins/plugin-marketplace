import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioTokensSchema, type AudioTokens } from "./unions/audio-tokens.js";
import { cachedTokensSchema, type CachedTokens } from "./unions/cached-tokens.js";

/** Breakdown of tokens used in the prompt. */
export type PromptTokensDetails = {
  audioTokens?: AudioTokens;
  cachedTokens?: CachedTokens;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptTokensDetailsSchema: Schema<PromptTokensDetails> = s.object<PromptTokensDetails>(
  {
    audioTokens: s.optional(s.lazy(() => audioTokensSchema)),
    cachedTokens: s.optional(s.lazy(() => cachedTokensSchema)),
    _keysMap: {
      audioTokens: "audio_tokens",
      cachedTokens: "cached_tokens",
    },
  },
  { additionalProperties: s.json() },
);
