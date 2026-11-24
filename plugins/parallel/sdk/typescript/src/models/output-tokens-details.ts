import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A detailed breakdown of the output tokens. */
export type OutputTokensDetails = {
  reasoningTokens: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputTokensDetailsSchema: Schema<OutputTokensDetails> = s.object<OutputTokensDetails>(
  {
    reasoningTokens: s.int(),
    _keysMap: {
      reasoningTokens: "reasoning_tokens",
    },
  },
  { additionalProperties: s.json() },
);
