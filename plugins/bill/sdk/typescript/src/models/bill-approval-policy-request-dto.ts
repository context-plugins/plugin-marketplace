import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billApprovalPolicyCreateRuleDtoSchema,
  type BillApprovalPolicyCreateRuleDto,
} from "./bill-approval-policy-create-rule-dto.js";

/** Create a bill approval policy */
export type BillApprovalPolicyRequestDto = {
  /** Bill approval policy name */
  policyName: string;
  /**
   * Bill approval policy rules. You can set multiple rules for a policy.
   *
   * **Note**: Policy rules are applied in the specified order.
   */
  rules: BillApprovalPolicyCreateRuleDto[];
  /**
   * List of approvers. For each approver, set the BILL-generated ID of the user. The value begins
   * with `006`.
   *
   * **Note**: BILL requests approvals in the specified order.
   */
  approvers: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billApprovalPolicyRequestDtoSchema: Schema<BillApprovalPolicyRequestDto> =
  s.object<BillApprovalPolicyRequestDto>(
    {
      policyName: s.string(),
      rules: s.array(s.lazy(() => billApprovalPolicyCreateRuleDtoSchema)),
      approvers: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
