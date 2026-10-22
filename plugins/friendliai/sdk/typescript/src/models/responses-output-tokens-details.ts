import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesOutputTokensDetails = {
  /** The number of reasoning tokens. */
  reasoningTokens: number;
};

export const responsesOutputTokensDetailsSchema: Schema<ResponsesOutputTokensDetails> =
  s.object<ResponsesOutputTokensDetails>({
    reasoningTokens: s.int(),
    _keysMap: {
      reasoningTokens: "reasoning_tokens",
    },
  });
