import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maxSchema, type Max } from "./unions/max.js";
import { minSchema, type Min } from "./unions/min.js";

/**
 * Specifies a limit on the number of tokens used for reasoning.
 *
 * The limit is an integer count of reasoning (thinking) tokens.
 */
export type ReasoningBudgetTokens = {
  /** @default "budget_tokens" */
  type?: "budget_tokens";
  /** Minimum reasoning tokens. `-1` means the model reasons without a budget limit. */
  min: Min;
  /** Maximum reasoning token budget. */
  max: Max;
};

export const reasoningBudgetTokensSchema: Schema<ReasoningBudgetTokens> = s.object<ReasoningBudgetTokens>({
  type: s.defaulted(s.literal("budget_tokens"), "budget_tokens"),
  min: minSchema,
  max: maxSchema,
});
