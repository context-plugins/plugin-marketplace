import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GraduationStrategy = {
  Manual: "MANUAL",
  SsPerformance: "SS_PERFORMANCE",
} as const;
export type GraduationStrategy = (typeof GraduationStrategy)[keyof typeof GraduationStrategy] | (string & {});

export const graduationStrategySchema: EnumSchema<GraduationStrategy> =
  s.enumOf<GraduationStrategy>(GraduationStrategy);
