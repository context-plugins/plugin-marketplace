import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeDeliverdDevTasksApi = {
  Assessment: "assessment",
  TestResult: "test_result",
  Approval: "approval",
  Decision: "decision",
  Policy: "policy",
  RiskAssessment: "risk_assessment",
  SecurityReview: "security_review",
  PrivacyReview: "privacy_review",
  DataAssessment: "data_assessment",
  ModelEvaluation: "model_evaluation",
  HumanReview: "human_review",
  Incident: "incident",
  Mitigation: "mitigation",
  ExternalDocument: "external_document",
  SystemLog: "system_log",
  ExecutionReceipt: "execution_receipt",
  RedTeam: "red_team",
} as const;
export type TypeDeliverdDevTasksApi =
  | (typeof TypeDeliverdDevTasksApi)[keyof typeof TypeDeliverdDevTasksApi]
  | (string & {});

export const typeDeliverdDevTasksApiSchema: EnumSchema<TypeDeliverdDevTasksApi> =
  s.enumOf<TypeDeliverdDevTasksApi>(TypeDeliverdDevTasksApi);
