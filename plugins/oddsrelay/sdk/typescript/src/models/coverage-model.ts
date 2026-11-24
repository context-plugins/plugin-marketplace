import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CoverageModel = {
  Matched: "matched",
  Dutching: "dutching",
} as const;
export type CoverageModel = (typeof CoverageModel)[keyof typeof CoverageModel] | (string & {});

export const coverageModelSchema: EnumSchema<CoverageModel> = s.enumOf<CoverageModel>(CoverageModel);
