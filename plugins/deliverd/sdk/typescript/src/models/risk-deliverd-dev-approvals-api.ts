import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the approver should weigh it; medium when omitted */
export const RiskDeliverdDevApprovalsApi = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type RiskDeliverdDevApprovalsApi =
  | (typeof RiskDeliverdDevApprovalsApi)[keyof typeof RiskDeliverdDevApprovalsApi]
  | (string & {});

export const riskDeliverdDevApprovalsApiSchema: EnumSchema<RiskDeliverdDevApprovalsApi> =
  s.enumOf<RiskDeliverdDevApprovalsApi>(RiskDeliverdDevApprovalsApi);
