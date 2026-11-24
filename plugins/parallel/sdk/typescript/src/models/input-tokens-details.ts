import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A detailed breakdown of the input tokens. */
export type InputTokensDetails = {
  cachedTokens: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputTokensDetailsSchema: Schema<InputTokensDetails> = s.object<InputTokensDetails>(
  {
    cachedTokens: s.int(),
    _keysMap: {
      cachedTokens: "cached_tokens",
    },
  },
  { additionalProperties: s.json() },
);
