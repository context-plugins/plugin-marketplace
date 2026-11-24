import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContractTemplatePriceBookRule = {
  name?: string;
  percentageChange?: number;
  unitPrice?: number;
  filters?: Record<string, unknown>[];
  formula?: string;
  cloud?: string;
  lineItemDescription?: string;
  applyInLine?: boolean;
  includeCredits?: boolean;
  applyAwsEligibleDiscount?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractTemplatePriceBookRuleSchema: Schema<ContractTemplatePriceBookRule> =
  s.object<ContractTemplatePriceBookRule>(
    {
      name: s.optional(s.string()),
      percentageChange: s.optional(s.float64()),
      unitPrice: s.optional(s.float64()),
      filters: s.optional(s.array(s.record(s.string(), s.unknown()))),
      formula: s.optional(s.string()),
      cloud: s.optional(s.string()),
      lineItemDescription: s.optional(s.string()),
      applyInLine: s.optional(s.boolean()),
      includeCredits: s.optional(s.boolean()),
      applyAwsEligibleDiscount: s.optional(s.boolean()),
      _keysMap: {
        applyAwsEligibleDiscount: "applyAWSEligibleDiscount",
      },
    },
    { additionalProperties: s.json() },
  );
