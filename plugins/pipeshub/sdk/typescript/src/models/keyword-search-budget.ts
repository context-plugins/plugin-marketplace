import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How long each search waits for the keyword (grep) match after its semantic results are in.
 * `short` waits at most 5 seconds and keeps the keyword matches found by then, for callers that
 * would rather answer sooner, such as agents calling chat over MCP. `full`, or leaving it out,
 * waits for all of it. Deployments running `HIGH_ACCURACY_MODE` always wait in full.
 */
export const KeywordSearchBudget = {
  Short: "short",
  Full: "full",
} as const;
export type KeywordSearchBudget =
  | (typeof KeywordSearchBudget)[keyof typeof KeywordSearchBudget]
  | (string & {});

export const keywordSearchBudgetSchema: EnumSchema<KeywordSearchBudget> =
  s.enumOf<KeywordSearchBudget>(KeywordSearchBudget);
