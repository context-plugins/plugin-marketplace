import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionImpactDeliverdDevGovernanceApiSchema,
  type DecisionImpactDeliverdDevGovernanceApi,
} from "./decision-impact-deliverd-dev-governance-api.js";
import { minRiskSchema, type MinRisk } from "./min-risk.js";

/** Conditions on the governance profile; every one given must hold */
export type AppliesWhen = {
  minRisk?: MinRisk;
  personalData?: boolean;
  customerFacing?: boolean;
  productionUse?: boolean;
  decisionImpact?: DecisionImpactDeliverdDevGovernanceApi[];
};

export const appliesWhenSchema: Schema<AppliesWhen> = s.object<AppliesWhen>({
  minRisk: s.optional(s.lazy(() => minRiskSchema)),
  personalData: s.optional(s.boolean()),
  customerFacing: s.optional(s.boolean()),
  productionUse: s.optional(s.boolean()),
  decisionImpact: s.optional(s.array(s.lazy(() => decisionImpactDeliverdDevGovernanceApiSchema))),
});
