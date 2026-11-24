import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionImpactDeliverdDevGovernanceApi = {
  None: "none",
  Informs: "informs",
  SupportsDecision: "supports_decision",
  AutomatedDecision: "automated_decision",
} as const;
export type DecisionImpactDeliverdDevGovernanceApi =
  | (typeof DecisionImpactDeliverdDevGovernanceApi)[keyof typeof DecisionImpactDeliverdDevGovernanceApi]
  | (string & {});

export const decisionImpactDeliverdDevGovernanceApiSchema: EnumSchema<DecisionImpactDeliverdDevGovernanceApi> =
  s.enumOf<DecisionImpactDeliverdDevGovernanceApi>(DecisionImpactDeliverdDevGovernanceApi);
