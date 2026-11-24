import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** low, medium, high or critical. Never lower than the AI system's own */
export const RiskDeliverdDevTasksApi = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type RiskDeliverdDevTasksApi =
  | (typeof RiskDeliverdDevTasksApi)[keyof typeof RiskDeliverdDevTasksApi]
  | (string & {});

export const riskDeliverdDevTasksApiSchema: EnumSchema<RiskDeliverdDevTasksApi> =
  s.enumOf<RiskDeliverdDevTasksApi>(RiskDeliverdDevTasksApi);
