import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Feedback reason; must belong to the given `resolution`. `ANOMALY_CONFIRMED` accepts
 * `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE`,
 * `ANOMALOUS_OTHER`; `NOT_ANOMALY` accepts `FAULTY_ANOMALY_DETECTION_MODEL`, `INCORRECT_DATA`,
 * `LOW_IMPACT`, `NON_ANOMALOUS_OTHER`.
 */
export const Reason = {
  FaultyAnomalyDetectionModel: "FAULTY_ANOMALY_DETECTION_MODEL",
  IncorrectData: "INCORRECT_DATA",
  ExpectedCostSpike: "EXPECTED_COST_SPIKE",
  LowImpact: "LOW_IMPACT",
  NonAnomalousOther: "NON_ANOMALOUS_OTHER",
  SecurityBreach: "SECURITY_BREACH",
  Misconfiguration: "MISCONFIGURATION",
  UnintentionalProvisioning: "UNINTENTIONAL_PROVISIONING",
  AnomalousOther: "ANOMALOUS_OTHER",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
