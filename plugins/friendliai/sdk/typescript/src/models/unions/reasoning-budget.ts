import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Specifies a positive integer that defines a limit on the number of tokens used for internal
 * reasoning tokens. This parameter is only effective for reasoning models.
 */
export type ReasoningBudget = number;

export const reasoningBudgetSchema: Schema<ReasoningBudget> = s.of<ReasoningBudget>(s.union([s.int()]));
