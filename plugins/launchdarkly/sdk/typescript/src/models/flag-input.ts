import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagInput = {
  /**
   * The ID of the variation or rollout of the flag to use. Use "fallthrough" for the default
   * targeting behavior when the flag is on.
   */
  ruleId: string;
  /** The flag version */
  flagConfigVersion: number;
  /**
   * The ID of the variation to route traffic not part of the experiment analysis to. Defaults to
   * variation ID of baseline treatment, if set.
   */
  notInExperimentVariationId?: string;
};

export const flagInputSchema: Schema<FlagInput> = s.object<FlagInput>({
  ruleId: s.string(),
  flagConfigVersion: s.int(),
  notInExperimentVariationId: s.optional(s.string()),
});
