import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billApprovalRuleOperatorResponseSchema,
  type BillApprovalRuleOperatorResponse,
} from "./bill-approval-rule-operator-response.js";
import { ruleKeyResponseSchema, type RuleKeyResponse } from "./rule-key-response.js";
import { ruleValueDtoSchema, type RuleValueDto } from "./rule-value-dto.js";

/** Rules for a bill approval policy. */
export type BillApprovalPolicyRuleResponseDto = {
  key?: RuleKeyResponse;
  op?: BillApprovalRuleOperatorResponse;
  /** Rule values */
  values?: RuleValueDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billApprovalPolicyRuleResponseDtoSchema: Schema<BillApprovalPolicyRuleResponseDto> =
  s.object<BillApprovalPolicyRuleResponseDto>(
    {
      key: s.optional(s.lazy(() => ruleKeyResponseSchema)),
      op: s.optional(s.lazy(() => billApprovalRuleOperatorResponseSchema)),
      values: s.optional(s.array(s.lazy(() => ruleValueDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
