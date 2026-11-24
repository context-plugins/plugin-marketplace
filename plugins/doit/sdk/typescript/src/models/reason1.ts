import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason1 = {
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
export type Reason1 = (typeof Reason1)[keyof typeof Reason1] | (string & {});

export const reason1Schema: EnumSchema<Reason1> = s.enumOf<Reason1>(Reason1);
