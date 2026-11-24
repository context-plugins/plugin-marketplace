import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  completionTokensDetails1Schema,
  type CompletionTokensDetails1,
} from "./unions/completion-tokens-details1.js";
import { promptTokensDetails1Schema, type PromptTokensDetails1 } from "./unions/prompt-tokens-details1.js";

/** Usage statistics for the completion request. */
export type CompletionUsage = {
  completionTokens: number;
  promptTokens: number;
  totalTokens: number;
  completionTokensDetails?: CompletionTokensDetails1;
  promptTokensDetails?: PromptTokensDetails1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completionUsageSchema: Schema<CompletionUsage> = s.object<CompletionUsage>(
  {
    completionTokens: s.int(),
    promptTokens: s.int(),
    totalTokens: s.int(),
    completionTokensDetails: s.optional(s.lazy(() => completionTokensDetails1Schema)),
    promptTokensDetails: s.optional(s.lazy(() => promptTokensDetails1Schema)),
    _keysMap: {
      completionTokens: "completion_tokens",
      promptTokens: "prompt_tokens",
      totalTokens: "total_tokens",
      completionTokensDetails: "completion_tokens_details",
      promptTokensDetails: "prompt_tokens_details",
    },
  },
  { additionalProperties: s.json() },
);
