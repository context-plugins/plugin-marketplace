import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Reasoning token budget. Required when `type=enabled`; must not be provided when `type=disabled`
 * or `type=adaptive`. If `max_tokens` is set, this must be smaller than `max_tokens`.
 */
export type BudgetTokens = number;

export const budgetTokensSchema: Schema<BudgetTokens> = s.of<BudgetTokens>(s.union([s.int()]));
