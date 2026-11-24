import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The campaign objective */
export const Objective = {
  OutcomeAwareness: "OUTCOME_AWARENESS",
  OutcomeEngagement: "OUTCOME_ENGAGEMENT",
  OutcomeLeads: "OUTCOME_LEADS",
  OutcomeSales: "OUTCOME_SALES",
  OutcomeTraffic: "OUTCOME_TRAFFIC",
  OutcomeAppPromotion: "OUTCOME_APP_PROMOTION",
} as const;
export type Objective = (typeof Objective)[keyof typeof Objective] | (string & {});

export const objectiveSchema: EnumSchema<Objective> = s.enumOf<Objective>(Objective);
