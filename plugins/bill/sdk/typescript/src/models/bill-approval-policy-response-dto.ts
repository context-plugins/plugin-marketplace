import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approversSchema, type Approvers } from "./approvers.js";
import {
  billApprovalPolicyRuleResponseDtoSchema,
  type BillApprovalPolicyRuleResponseDto,
} from "./bill-approval-policy-rule-response-dto.js";

/** Response DTO for bill approval policy. */
export type BillApprovalPolicyResponseDto = {
  /**
   * BILL-generated ID of the approval policy. The value is in the `{organization_id}-{unique_id}`
   * format.
   */
  id?: string;
  /** Bill approval policy name */
  policyName?: string;
  /** Bill approval policy status */
  status?: string;
  /** Bill approval policy rules */
  rules?: BillApprovalPolicyRuleResponseDto[];
  approvers?: Approvers;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billApprovalPolicyResponseDtoSchema: Schema<BillApprovalPolicyResponseDto> =
  s.object<BillApprovalPolicyResponseDto>(
    {
      id: s.optional(s.string()),
      policyName: s.optional(s.string()),
      status: s.optional(s.string()),
      rules: s.optional(s.array(s.lazy(() => billApprovalPolicyRuleResponseDtoSchema))),
      approvers: s.optional(s.lazy(() => approversSchema)),
    },
    { additionalProperties: s.json() },
  );
