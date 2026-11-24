import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cachedTokensSchema, type CachedTokens } from "./unions/cached-tokens.js";
import {
  completionTokenIdsInternalSchema,
  completionTokenIdsSchema,
  type CompletionTokenIds,
} from "./unions/completion-token-ids.js";
import { completionTokensSchema, type CompletionTokens } from "./unions/completion-tokens.js";
import { costUsdSchema, type CostUsd } from "./unions/cost-usd.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { logprobsInternalSchema, logprobsSchema, type Logprobs } from "./unions/logprobs.js";
import {
  promptTokenIdsInternalSchema,
  promptTokenIdsSchema,
  type PromptTokenIds,
} from "./unions/prompt-token-ids.js";
import { promptTokensSchema, type PromptTokens } from "./unions/prompt-tokens.js";

export type AtifMetrics = {
  promptTokens?: PromptTokens;
  completionTokens?: CompletionTokens;
  cachedTokens?: CachedTokens;
  costUsd?: CostUsd;
  promptTokenIds?: PromptTokenIds;
  completionTokenIds?: CompletionTokenIds;
  logprobs?: Logprobs;
  extra?: Extra;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const atifMetricsProperties: s.Shape<AtifMetrics> = {
  promptTokens: s.optional(s.lazy(() => promptTokensSchema)),
  completionTokens: s.optional(s.lazy(() => completionTokensSchema)),
  cachedTokens: s.optional(s.lazy(() => cachedTokensSchema)),
  costUsd: s.optional(s.lazy(() => costUsdSchema)),
  promptTokenIds: s.optional(s.lazy(() => promptTokenIdsInternalSchema)),
  completionTokenIds: s.optional(s.lazy(() => completionTokenIdsInternalSchema)),
  logprobs: s.optional(s.lazy(() => logprobsInternalSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    promptTokens: "prompt_tokens",
    completionTokens: "completion_tokens",
    cachedTokens: "cached_tokens",
    costUsd: "cost_usd",
    promptTokenIds: "prompt_token_ids",
    completionTokenIds: "completion_token_ids",
  },
};

export const atifMetricsInternalSchema: Schema<AtifMetrics> = s.object<AtifMetrics>(atifMetricsProperties, {
  additionalProperties: s.json(),
});

export const atifMetricsSchema: Schema<AtifMetrics> = s.lazySchema(() =>
  s.object<AtifMetrics>(
    {
      ...atifMetricsProperties,
      promptTokenIds: s.optional(s.lazy(() => promptTokenIdsSchema)),
      completionTokenIds: s.optional(s.lazy(() => completionTokenIdsSchema)),
      logprobs: s.optional(s.lazy(() => logprobsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
