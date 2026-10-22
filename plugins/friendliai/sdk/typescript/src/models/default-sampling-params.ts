import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Default sampling parameters applied when the request omits them.
 *
 * These are the resolved values used at inference time.
 */
export type DefaultSamplingParams = {
  /**
   * Penalizes tokens that have already appeared in the generated result (plus the input tokens for
   * decoder-only models). Should be a positive value (1.0 means no penalty). This is similar to
   * Hugging Face's repetition_penalty argument.
   */
  repetitionPenalty: number;
  /**
   * Sampling temperature. Smaller temperature makes the generation result closer to greedy, argmax
   * (i.e., top_k = 1) sampling. This is similar to Hugging Face's temperature argument.
   */
  temperature: number;
  /**
   * Keeps only the smallest set of tokens whose cumulative probabilities reach top_p or higher.
   * Values range from 0.0 to 1.0 (inclusive). 1.0 includes all tokens, allowing maximum diversity.
   */
  topP: number;
  /**
   * A scaling factor used to determine the minimum token probability threshold. This threshold is
   * calculated as min_p multiplied by the probability of the most likely token. Tokens with
   * probabilities below this scaled threshold are excluded from sampling. Values range from 0.0
   * (inclusive) to 1.0 (inclusive). Higher values result in stricter filtering, while lower values
   * allow for greater diversity. 0.0 disables filtering, allowing all tokens to be considered for
   * sampling.
   */
  minP: number;
  /**
   * Limits sampling to the top k tokens with the highest probabilities. Values range from 0 (no
   * filtering) to the model's vocabulary size (inclusive). 0 applies no filtering, allowing all
   * tokens.
   */
  topK: number;
};

export const defaultSamplingParamsSchema: Schema<DefaultSamplingParams> = s.object<DefaultSamplingParams>({
  repetitionPenalty: s.float64(),
  temperature: s.float64(),
  topP: s.float64(),
  minP: s.float64(),
  topK: s.int(),
  _keysMap: {
    repetitionPenalty: "repetition_penalty",
    topP: "top_p",
    minP: "min_p",
    topK: "top_k",
  },
});
