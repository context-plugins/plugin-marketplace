import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls whether highly similar jobs are returned next to each other in the search results. Jobs
 * are identified as highly similar based on their titles, job categories, and locations. Highly
 * similar results are clustered so that only one representative job of the cluster is displayed to
 * the job seeker higher up in the results, with the other jobs being displayed lower down in the
 * results. Defaults to DiversificationLevel.SIMPLE if no value is specified.
 */
export const DiversificationLevel = {
  DiversificationLevelUnspecified: "DIVERSIFICATION_LEVEL_UNSPECIFIED",
  Disabled: "DISABLED",
  Simple: "SIMPLE",
  OnePerCompany: "ONE_PER_COMPANY",
  TwoPerCompany: "TWO_PER_COMPANY",
  MaxThreePerCompany: "MAX_THREE_PER_COMPANY",
  DiversifyByLooserSimilarity: "DIVERSIFY_BY_LOOSER_SIMILARITY",
} as const;
export type DiversificationLevel =
  | (typeof DiversificationLevel)[keyof typeof DiversificationLevel]
  | (string & {});

export const diversificationLevelSchema: EnumSchema<DiversificationLevel> =
  s.enumOf<DiversificationLevel>(DiversificationLevel);
