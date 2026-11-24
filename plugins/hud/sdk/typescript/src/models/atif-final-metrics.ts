import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { totalCachedTokensSchema, type TotalCachedTokens } from "./unions/total-cached-tokens.js";
import { totalCompletionTokensSchema, type TotalCompletionTokens } from "./unions/total-completion-tokens.js";
import { totalCostUsdSchema, type TotalCostUsd } from "./unions/total-cost-usd.js";
import { totalPromptTokensSchema, type TotalPromptTokens } from "./unions/total-prompt-tokens.js";
import { totalStepsInternalSchema, totalStepsSchema, type TotalSteps } from "./unions/total-steps.js";

export type AtifFinalMetrics = {
  totalPromptTokens?: TotalPromptTokens;
  totalCompletionTokens?: TotalCompletionTokens;
  totalCachedTokens?: TotalCachedTokens;
  totalCostUsd?: TotalCostUsd;
  totalSteps?: TotalSteps;
  extra?: Extra;
};

const atifFinalMetricsProperties: s.Shape<AtifFinalMetrics> = {
  totalPromptTokens: s.optional(s.lazy(() => totalPromptTokensSchema)),
  totalCompletionTokens: s.optional(s.lazy(() => totalCompletionTokensSchema)),
  totalCachedTokens: s.optional(s.lazy(() => totalCachedTokensSchema)),
  totalCostUsd: s.optional(s.lazy(() => totalCostUsdSchema)),
  totalSteps: s.optional(s.lazy(() => totalStepsInternalSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    totalPromptTokens: "total_prompt_tokens",
    totalCompletionTokens: "total_completion_tokens",
    totalCachedTokens: "total_cached_tokens",
    totalCostUsd: "total_cost_usd",
    totalSteps: "total_steps",
  },
};

export const atifFinalMetricsInternalSchema: Schema<AtifFinalMetrics> =
  s.object<AtifFinalMetrics>(atifFinalMetricsProperties);

export const atifFinalMetricsSchema: Schema<AtifFinalMetrics> = s.lazySchema(() =>
  s.object<AtifFinalMetrics>({
    ...atifFinalMetricsProperties,
    totalSteps: s.optional(s.lazy(() => totalStepsSchema)),
  }),
);
