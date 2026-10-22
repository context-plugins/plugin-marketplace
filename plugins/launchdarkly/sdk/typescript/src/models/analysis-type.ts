import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The method for analyzing metric events */
export const AnalysisType = {
  Mean: "mean",
  Percentile: "percentile",
} as const;
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType] | (string & {});

export const analysisTypeSchema: EnumSchema<AnalysisType> = s.enumOf<AnalysisType>(AnalysisType);
