import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ruleKeyCreateDtoSchema, type RuleKeyCreateDto } from "./rule-key-create-dto.js";
import { ruleOperatorCreateDtoSchema, type RuleOperatorCreateDto } from "./rule-operator-create-dto.js";

/** Rules for a bill approval policy. */
export type BillApprovalPolicyCreateRuleDto = {
  key?: RuleKeyCreateDto;
  op?: RuleOperatorCreateDto;
  /** Rule values */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billApprovalPolicyCreateRuleDtoSchema: Schema<BillApprovalPolicyCreateRuleDto> =
  s.object<BillApprovalPolicyCreateRuleDto>(
    {
      key: s.optional(s.lazy(() => ruleKeyCreateDtoSchema)),
      op: s.optional(s.lazy(() => ruleOperatorCreateDtoSchema)),
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
