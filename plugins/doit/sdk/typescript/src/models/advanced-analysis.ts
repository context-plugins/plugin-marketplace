import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Advanced analysis options. Each can be set independently. */
export type AdvancedAnalysis = {
  forecast?: boolean;
  notTrending?: boolean;
  trendingDown?: boolean;
  trendingUp?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advancedAnalysisSchema: Schema<AdvancedAnalysis> = s.object<AdvancedAnalysis>(
  {
    forecast: s.optional(s.boolean()),
    notTrending: s.optional(s.boolean()),
    trendingDown: s.optional(s.boolean()),
    trendingUp: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
