import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";
import { budgetTokensSchema, type BudgetTokens } from "./unions/budget-tokens.js";

export type MessagesThinkingConfig = {
  /**
   * Reasoning mode. `enabled` forces reasoning, `disabled` suppresses it, and `adaptive` lets the
   * system decide.
   */
  type: Type3;
  /**
   * Reasoning token budget. Required when `type=enabled`; must not be provided when `type=disabled`
   * or `type=adaptive`. If `max_tokens` is set, this must be smaller than `max_tokens`.
   */
  budgetTokens?: BudgetTokens;
};

export const messagesThinkingConfigSchema: Schema<MessagesThinkingConfig> = s.object<MessagesThinkingConfig>({
  type: type3Schema,
  budgetTokens: s.optional(s.lazy(() => budgetTokensSchema)),
  _keysMap: {
    budgetTokens: "budget_tokens",
  },
});
