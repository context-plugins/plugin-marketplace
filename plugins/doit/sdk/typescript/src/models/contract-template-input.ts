import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contractTemplateBillingRuleSchema,
  type ContractTemplateBillingRule,
} from "./contract-template-billing-rule.js";
import {
  contractTemplatePriceBookSchema,
  type ContractTemplatePriceBook,
} from "./contract-template-price-book.js";

/** Payload for creating or updating a contract template. */
export type ContractTemplateInput = {
  name: string;
  platform: string;
  /**
   * Which preset the template started from. Optional — an omitted or blank value is recorded as
   * "blank".
   */
  structure?: string;
  eligibleFrom: Date;
  eligibleTo?: Date;
  billingRules?: ContractTemplateBillingRule[];
  priceBooks?: ContractTemplatePriceBook[];
  customLineItems?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractTemplateInputSchema: Schema<ContractTemplateInput> = s.object<ContractTemplateInput>(
  {
    name: s.string(),
    platform: s.string(),
    structure: s.optional(s.string()),
    eligibleFrom: s.dateTime(),
    eligibleTo: s.optional(s.dateTime()),
    billingRules: s.optional(s.array(s.lazy(() => contractTemplateBillingRuleSchema))),
    priceBooks: s.optional(s.array(s.lazy(() => contractTemplatePriceBookSchema))),
    customLineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
