import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reasoningBudgetTokensSchema, type ReasoningBudgetTokens } from "../reasoning-budget-tokens.js";
import { reasoningEffortOptionSchema, type ReasoningEffortOption } from "../reasoning-effort-option.js";
import { reasoningToggleSchema, type ReasoningToggle } from "../reasoning-toggle.js";

export type ReasoningOption =
  | (ReasoningBudgetTokens & { type: "budget_tokens" })
  | (ReasoningEffortOption & { type: "effort" })
  | (ReasoningToggle & { type: "toggle" });

export const reasoningOptionSchema: Schema<ReasoningOption> = s.discriminatedUnion<ReasoningOption>("type", {
  budget_tokens: reasoningBudgetTokensSchema,
  effort: reasoningEffortOptionSchema,
  toggle: reasoningToggleSchema,
});
