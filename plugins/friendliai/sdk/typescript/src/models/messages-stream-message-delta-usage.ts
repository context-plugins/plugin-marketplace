import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cacheReadInputTokens1Schema,
  type CacheReadInputTokens1,
} from "./unions/cache-read-input-tokens1.js";
import { inputTokensSchema, type InputTokens } from "./unions/input-tokens.js";
import { outputTokensSchema, type OutputTokens } from "./unions/output-tokens.js";

export type MessagesStreamMessageDeltaUsage = {
  /** Input token count delta when included. */
  inputTokens?: InputTokens;
  /** Output token count delta when included. */
  outputTokens?: OutputTokens;
  /** Cached input token count delta when included. */
  cacheReadInputTokens?: CacheReadInputTokens1;
};

export const messagesStreamMessageDeltaUsageSchema: Schema<MessagesStreamMessageDeltaUsage> =
  s.object<MessagesStreamMessageDeltaUsage>({
    inputTokens: s.optional(s.lazy(() => inputTokensSchema)),
    outputTokens: s.optional(s.lazy(() => outputTokensSchema)),
    cacheReadInputTokens: s.optional(s.lazy(() => cacheReadInputTokens1Schema)),
    _keysMap: {
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
      cacheReadInputTokens: "cache_read_input_tokens",
    },
  });
