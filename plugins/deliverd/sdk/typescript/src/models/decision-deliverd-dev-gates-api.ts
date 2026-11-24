import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionDeliverdDevGatesApi = {
  Allow: "ALLOW",
  ApprovalRequired: "APPROVAL_REQUIRED",
  ReviewRequired: "REVIEW_REQUIRED",
  Deny: "DENY",
} as const;
export type DecisionDeliverdDevGatesApi =
  | (typeof DecisionDeliverdDevGatesApi)[keyof typeof DecisionDeliverdDevGatesApi]
  | (string & {});

export const decisionDeliverdDevGatesApiSchema: EnumSchema<DecisionDeliverdDevGatesApi> =
  s.enumOf<DecisionDeliverdDevGatesApi>(DecisionDeliverdDevGatesApi);
