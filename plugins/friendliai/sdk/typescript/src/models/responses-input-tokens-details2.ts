import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A detailed breakdown of the input tokens. */
export type ResponsesInputTokensDetails2 = {
  /** The number of tokens that were retrieved from the cache. */
  cachedTokens: number;
};

export const responsesInputTokensDetails2Schema: Schema<ResponsesInputTokensDetails2> =
  s.object<ResponsesInputTokensDetails2>({
    cachedTokens: s.int(),
    _keysMap: {
      cachedTokens: "cached_tokens",
    },
  });
