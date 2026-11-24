import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of analytics feature that was skipped during the analysis of a call analytics
 * job.
 */
export const Feature = {
  GenerativeSummarization: "GENERATIVE_SUMMARIZATION",
} as const;
export type Feature = (typeof Feature)[keyof typeof Feature] | (string & {});

export const featureSchema: EnumSchema<Feature> = s.enumOf<Feature>(Feature);
