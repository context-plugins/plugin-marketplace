import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextClassificationUsage = {
  /** Number of tokens in the input text. */
  promptTokens: number;
  /** Total number of tokens used in the request. */
  totalTokens: number;
};

export const textClassificationUsageSchema: Schema<TextClassificationUsage> =
  s.object<TextClassificationUsage>({
    promptTokens: s.int(),
    totalTokens: s.int(),
    _keysMap: {
      promptTokens: "prompt_tokens",
      totalTokens: "total_tokens",
    },
  });
