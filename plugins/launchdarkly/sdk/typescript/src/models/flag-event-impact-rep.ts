import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluationsSummarySchema, type EvaluationsSummary } from "./evaluations-summary.js";
import { sizeSchema, type Size } from "./size.js";

export type FlagEventImpactRep = {
  /**
   * The size of the flag event impact. Sizes are defined as: none (0%), small (0-20%), medium
   * (20-80%), large (>80%)
   */
  size?: Size;
  /** The percentage of the flag event impact */
  percentage?: number;
  reason?: string;
  evaluationsSummary?: EvaluationsSummary;
};

export const flagEventImpactRepSchema: Schema<FlagEventImpactRep> = s.object<FlagEventImpactRep>({
  size: s.optional(s.lazy(() => sizeSchema)),
  percentage: s.optional(s.float64()),
  reason: s.optional(s.string()),
  evaluationsSummary: s.optional(s.lazy(() => evaluationsSummarySchema)),
});
