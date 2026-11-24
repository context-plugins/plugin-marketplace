import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What its output feeds into */
export const DecisionImpact = {
  None: "none",
  Informs: "informs",
  SupportsDecision: "supports_decision",
  AutomatedDecision: "automated_decision",
} as const;
export type DecisionImpact = (typeof DecisionImpact)[keyof typeof DecisionImpact] | (string & {});

export const decisionImpactSchema: EnumSchema<DecisionImpact> = s.enumOf<DecisionImpact>(DecisionImpact);
