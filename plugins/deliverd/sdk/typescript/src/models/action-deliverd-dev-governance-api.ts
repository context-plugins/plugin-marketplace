import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionDeliverdDevGovernanceApi = {
  Read: "read",
  Analyse: "analyse",
  Recommend: "recommend",
  Draft: "draft",
  Modify: "modify",
  Execute: "execute",
  Publish: "publish",
  Deploy: "deploy",
  Send: "send",
  Delete: "delete",
  FinancialAction: "financial_action",
  CustomerDecision: "customer_decision",
} as const;
export type ActionDeliverdDevGovernanceApi =
  | (typeof ActionDeliverdDevGovernanceApi)[keyof typeof ActionDeliverdDevGovernanceApi]
  | (string & {});

export const actionDeliverdDevGovernanceApiSchema: EnumSchema<ActionDeliverdDevGovernanceApi> =
  s.enumOf<ActionDeliverdDevGovernanceApi>(ActionDeliverdDevGovernanceApi);
