import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified split
 * routing rule outcome variant. The variant ID should be in UUID format.
 */
export type RuleVariantId = string[];

export const ruleVariantIdSchema: Schema<RuleVariantId> = s.of<RuleVariantId>(s.union([s.array(s.string())]));
