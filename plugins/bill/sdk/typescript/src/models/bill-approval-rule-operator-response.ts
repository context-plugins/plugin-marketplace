import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response enum of operators supported for bill policy approval rules. */
export const BillApprovalRuleOperatorResponse = {
  Lt: "lt",
  Gte: "gte",
  In: "in",
  Nin: "nin",
  Undefined: "UNDEFINED",
} as const;
export type BillApprovalRuleOperatorResponse =
  | (typeof BillApprovalRuleOperatorResponse)[keyof typeof BillApprovalRuleOperatorResponse]
  | (string & {});

export const billApprovalRuleOperatorResponseSchema: EnumSchema<BillApprovalRuleOperatorResponse> =
  s.enumOf<BillApprovalRuleOperatorResponse>(BillApprovalRuleOperatorResponse);
