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
import {
  statusDoiTContractTemplatesApiSchema,
  type StatusDoiTContractTemplatesApi,
} from "./status-doi-tcontract-templates-api.js";

/** Contract template returned by the PartnerOps external API. */
export type ContractTemplateResponse = {
  templateId?: string;
  name?: string;
  platform?: string;
  status?: StatusDoiTContractTemplatesApi;
  structure?: string;
  eligibleFrom?: Date;
  eligibleTo?: Date;
  billingRules?: ContractTemplateBillingRule[];
  priceBooks?: ContractTemplatePriceBook[];
  customLineItems?: Record<string, unknown>[];
  createdAt?: Date;
  updatedAt?: Date;
  archivedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractTemplateResponseSchema: Schema<ContractTemplateResponse> =
  s.object<ContractTemplateResponse>(
    {
      templateId: s.optional(s.string()),
      name: s.optional(s.string()),
      platform: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusDoiTContractTemplatesApiSchema)),
      structure: s.optional(s.string()),
      eligibleFrom: s.optional(s.dateTime()),
      eligibleTo: s.optional(s.dateTime()),
      billingRules: s.optional(s.array(s.lazy(() => contractTemplateBillingRuleSchema))),
      priceBooks: s.optional(s.array(s.lazy(() => contractTemplatePriceBookSchema))),
      customLineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
      createdAt: s.optional(s.dateTime()),
      updatedAt: s.optional(s.dateTime()),
      archivedAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
