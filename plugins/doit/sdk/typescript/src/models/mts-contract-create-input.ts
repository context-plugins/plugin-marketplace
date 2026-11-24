import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renewalPolicy1Schema, type RenewalPolicy1 } from "./renewal-policy1.js";

export type MtsContractCreateInput = {
  name: string;
  startDate: Date;
  endDate?: Date | null;
  renewalPolicy: RenewalPolicy1;
  /**
   * Whether DoiT generates invoices for this contract. Disabling suppresses invoice generation from
   * that point forward while billing calculations and pipeline outputs continue. Omitting the field
   * leaves invoicing enabled.
   *
   * @default true
   */
  doitInvoicingEnabled?: boolean;
  /**
   * Required for an end-customer contract with doitInvoicingEnabled set to true; optional
   * otherwise.
   */
  invoicesEmail?: string;
  /**
   * Required for an end-customer contract with doitInvoicingEnabled set to true; optional
   * otherwise.
   */
  contractUpdatesEmail?: string;
  /**
   * The billing profile (name, country, state, city, address, zip). Required for an end-customer
   * contract with doitInvoicingEnabled set to true; optional otherwise.
   */
  billingProfile?: Record<string, unknown>;
  managementAccounts?: string[];
  billingRules?: Record<string, unknown>[];
  priceBooks?: Record<string, unknown>[];
  customLineItems?: Record<string, unknown>[];
  /**
   * ID of a contract template owned by the authenticated tenant. When specified, the template's
   * billing rules, price books, and custom line items are copied onto the new contract. Mutually
   * exclusive with billingRules, priceBooks, and customLineItems in the request body.
   */
  templateId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mtsContractCreateInputProperties: s.Shape<MtsContractCreateInput> = {
  name: s.string(),
  startDate: s.dateTime(),
  endDate: s.optionalNullable(s.dateTime()),
  renewalPolicy: renewalPolicy1Schema,
  doitInvoicingEnabled: s.defaulted(s.boolean(), true),
  invoicesEmail: s.optional(s.string()),
  contractUpdatesEmail: s.optional(s.string()),
  billingProfile: s.optional(s.record(s.string(), s.unknown())),
  managementAccounts: s.optional(s.array(s.string())),
  billingRules: s.optional(s.array(s.record(s.string(), s.unknown()))),
  priceBooks: s.optional(s.array(s.record(s.string(), s.unknown()))),
  customLineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
  templateId: s.optional(s.string()),
};

export const mtsContractCreateInputInternalSchema: Schema<MtsContractCreateInput> =
  s.object<MtsContractCreateInput>(mtsContractCreateInputProperties, { additionalProperties: s.json() });

export const mtsContractCreateInputSchema: Schema<MtsContractCreateInput> = s.lazySchema(() =>
  s.object<MtsContractCreateInput>(
    {
      ...mtsContractCreateInputProperties,
      invoicesEmail: s.optional(s.string().check(s.email())),
      contractUpdatesEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
