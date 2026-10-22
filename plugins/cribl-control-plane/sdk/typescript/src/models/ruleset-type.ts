import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of ruleset to apply: dataset or datatype. */
export const RulesetType = {
  Dataset: "dataset",
  Datatype: "datatype",
} as const;
export type RulesetType = (typeof RulesetType)[keyof typeof RulesetType] | (string & {});

export const rulesetTypeSchema: EnumSchema<RulesetType> = s.enumOf<RulesetType>(RulesetType);
