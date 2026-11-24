import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Coarse rating bucket derived from the Vercel Agent Readability score. */
export const McpRating = {
  Excellent: "excellent",
  Good: "good",
  Fair: "fair",
  NeedsImprovement: "needs_improvement",
} as const;
export type McpRating = (typeof McpRating)[keyof typeof McpRating] | (string & {});

export const mcpRatingSchema: EnumSchema<McpRating> = s.enumOf<McpRating>(McpRating);
