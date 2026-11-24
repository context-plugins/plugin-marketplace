import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renewalPolicy1Schema, type RenewalPolicy1 } from "./renewal-policy1.js";

/** Contract create/update payload. Full field-level validation is applied server-side. */
export type MtsContractInput = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mtsContractInputProperties: s.Shape<MtsContractInput> = {
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
};

export const mtsContractInputInternalSchema: Schema<MtsContractInput> = s.object<MtsContractInput>(
  mtsContractInputProperties,
  { additionalProperties: s.json() },
);

export const mtsContractInputSchema: Schema<MtsContractInput> = s.lazySchema(() =>
  s.object<MtsContractInput>(
    {
      ...mtsContractInputProperties,
      invoicesEmail: s.optional(s.string().check(s.email())),
      contractUpdatesEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
