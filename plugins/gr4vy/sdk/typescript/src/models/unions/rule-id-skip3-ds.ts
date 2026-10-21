import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified 3DS rule.
 * The rule ID should be in UUID format. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not
 * processed by any 3DS rule.
 */
export type RuleIdSkip3Ds = string[];

export const ruleIdSkip3DsSchema: Schema<RuleIdSkip3Ds> = s.of<RuleIdSkip3Ds>(s.union([s.array(s.string())]));
