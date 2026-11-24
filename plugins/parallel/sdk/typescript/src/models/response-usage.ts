import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputTokensDetailsSchema, type InputTokensDetails } from "./input-tokens-details.js";
import { outputTokensDetailsSchema, type OutputTokensDetails } from "./output-tokens-details.js";

/**
 * Estimated token usage, populated for OpenAI SDK compatibility. Counts are approximate; Parallel
 * bills per request, not per token.
 */
export type ResponseUsage = {
  inputTokens: number;
  /** A detailed breakdown of the input tokens. */
  inputTokensDetails: InputTokensDetails;
  outputTokens: number;
  /** A detailed breakdown of the output tokens. */
  outputTokensDetails: OutputTokensDetails;
  totalTokens: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseUsageSchema: Schema<ResponseUsage> = s.object<ResponseUsage>(
  {
    inputTokens: s.int(),
    inputTokensDetails: inputTokensDetailsSchema,
    outputTokens: s.int(),
    outputTokensDetails: outputTokensDetailsSchema,
    totalTokens: s.int(),
    _keysMap: {
      inputTokens: "input_tokens",
      inputTokensDetails: "input_tokens_details",
      outputTokens: "output_tokens",
      outputTokensDetails: "output_tokens_details",
      totalTokens: "total_tokens",
    },
  },
  { additionalProperties: s.json() },
);
