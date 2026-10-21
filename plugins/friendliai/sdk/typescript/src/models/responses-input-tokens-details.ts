import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesInputTokensDetails = {
  /** The number of tokens that were retrieved from the cache. */
  cachedTokens: number;
};

export const responsesInputTokensDetailsSchema: Schema<ResponsesInputTokensDetails> =
  s.object<ResponsesInputTokensDetails>({
    cachedTokens: s.int(),
    _keysMap: {
      cachedTokens: "cached_tokens",
    },
  });
