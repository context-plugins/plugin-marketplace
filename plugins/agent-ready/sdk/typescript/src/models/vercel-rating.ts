import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Coarse rating bucket derived from the Vercel Agent Readability score. */
export const VercelRating = {
  Excellent: "excellent",
  Good: "good",
  Fair: "fair",
  NeedsImprovement: "needs_improvement",
} as const;
export type VercelRating = (typeof VercelRating)[keyof typeof VercelRating] | (string & {});

export const vercelRatingSchema: EnumSchema<VercelRating> = s.enumOf<VercelRating>(VercelRating);
