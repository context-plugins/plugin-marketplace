import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContractTemplateBillingRule = {
  name?: string;
  managementAccounts?: string[];
  filters?: Record<string, unknown>[];
  formula?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractTemplateBillingRuleSchema: Schema<ContractTemplateBillingRule> =
  s.object<ContractTemplateBillingRule>(
    {
      name: s.optional(s.string()),
      managementAccounts: s.optional(s.array(s.string())),
      filters: s.optional(s.array(s.record(s.string(), s.unknown()))),
      formula: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
