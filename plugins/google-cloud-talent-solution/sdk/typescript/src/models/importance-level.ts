import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets
 * applied to job's final ranking position. An error is thrown if not specified.
 */
export const ImportanceLevel = {
  ImportanceLevelUnspecified: "IMPORTANCE_LEVEL_UNSPECIFIED",
  None: "NONE",
  Low: "LOW",
  Mild: "MILD",
  Medium: "MEDIUM",
  High: "HIGH",
  Extreme: "EXTREME",
} as const;
export type ImportanceLevel = (typeof ImportanceLevel)[keyof typeof ImportanceLevel] | (string & {});

export const importanceLevelSchema: EnumSchema<ImportanceLevel> = s.enumOf<ImportanceLevel>(ImportanceLevel);
