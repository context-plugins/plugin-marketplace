import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptTokensDetails1Schema, type PromptTokensDetails1 } from "./unions/prompt-tokens-details1.js";

export type TextUsage = {
  /** Number of tokens in the prompt. */
  promptTokens: number;
  /** Number of tokens in the generated completions. */
  completionTokens: number;
  /** Total number of tokens used in the request (`prompt_tokens` + `completion_tokens`). */
  totalTokens: number;
  /** Breakdown of tokens used in the prompt. */
  promptTokensDetails?: PromptTokensDetails1;
};

export const textUsageSchema: Schema<TextUsage> = s.object<TextUsage>({
  promptTokens: s.int(),
  completionTokens: s.int(),
  totalTokens: s.int(),
  promptTokensDetails: s.optional(s.lazy(() => promptTokensDetails1Schema)),
  _keysMap: {
    promptTokens: "prompt_tokens",
    completionTokens: "completion_tokens",
    totalTokens: "total_tokens",
    promptTokensDetails: "prompt_tokens_details",
  },
});
