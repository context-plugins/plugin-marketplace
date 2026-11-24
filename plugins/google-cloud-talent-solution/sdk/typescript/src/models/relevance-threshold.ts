import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The relevance threshold of the search results. Default to Google defined threshold,
 * leveraging a balance of precision and recall to deliver both highly accurate results and
 * comprehensive coverage of relevant information.
 */
export const RelevanceThreshold = {
  RelevanceThresholdUnspecified: "RELEVANCE_THRESHOLD_UNSPECIFIED",
  Lowest: "LOWEST",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type RelevanceThreshold = (typeof RelevanceThreshold)[keyof typeof RelevanceThreshold] | (string & {});

export const relevanceThresholdSchema: EnumSchema<RelevanceThreshold> =
  s.enumOf<RelevanceThreshold>(RelevanceThreshold);
