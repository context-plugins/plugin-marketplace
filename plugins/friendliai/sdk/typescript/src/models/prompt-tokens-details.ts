import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cachedTokensSchema, type CachedTokens } from "./unions/cached-tokens.js";

export type PromptTokensDetails = {
  /** Cached tokens present in the prompt. */
  cachedTokens?: CachedTokens;
};

export const promptTokensDetailsSchema: Schema<PromptTokensDetails> = s.object<PromptTokensDetails>({
  cachedTokens: s.optional(s.lazy(() => cachedTokensSchema)),
  _keysMap: {
    cachedTokens: "cached_tokens",
  },
});
