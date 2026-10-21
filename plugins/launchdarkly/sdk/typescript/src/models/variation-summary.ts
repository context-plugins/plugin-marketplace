import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VariationSummary = {
  rules: number;
  nullRules: number;
  targets: number;
  contextTargets: number;
  isFallthrough?: boolean;
  isOff?: boolean;
  rollout?: number;
  bucketBy?: string;
};

export const variationSummarySchema: Schema<VariationSummary> = s.object<VariationSummary>({
  rules: s.int(),
  nullRules: s.int(),
  targets: s.int(),
  contextTargets: s.int(),
  isFallthrough: s.optional(s.boolean()),
  isOff: s.optional(s.boolean()),
  rollout: s.optional(s.int()),
  bucketBy: s.optional(s.string()),
});
