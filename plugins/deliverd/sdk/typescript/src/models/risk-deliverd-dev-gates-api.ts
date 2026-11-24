import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How risky you judge it. Can raise, never lower, the action's own risk */
export const RiskDeliverdDevGatesApi = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type RiskDeliverdDevGatesApi =
  | (typeof RiskDeliverdDevGatesApi)[keyof typeof RiskDeliverdDevGatesApi]
  | (string & {});

export const riskDeliverdDevGatesApiSchema: EnumSchema<RiskDeliverdDevGatesApi> =
  s.enumOf<RiskDeliverdDevGatesApi>(RiskDeliverdDevGatesApi);
