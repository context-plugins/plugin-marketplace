import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Version = {
  /** Contract version number. */
  version?: number;
  /** Version status. */
  status?: string;
  name?: string;
  startDate?: Date;
  endDate?: Date | null;
  effectiveStart?: Date;
  effectiveEnd?: Date | null;
  renewalPolicy?: string;
  cancellationReason?: string | null;
  billingProfile?: Record<string, unknown>;
  invoicesEmail?: string;
  contractUpdatesEmail?: string;
  /** Whether DoiT generates invoices for this contract. */
  doitInvoicingEnabled?: boolean;
  managementAccounts?: string[];
  billingRules?: Record<string, unknown>[];
  priceBooks?: Record<string, unknown>[];
  customLineItems?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const versionProperties: s.Shape<Version> = {
  version: s.optional(s.int()),
  status: s.optional(s.string()),
  name: s.optional(s.string()),
  startDate: s.optional(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  effectiveStart: s.optional(s.dateTime()),
  effectiveEnd: s.optionalNullable(s.dateTime()),
  renewalPolicy: s.optional(s.string()),
  cancellationReason: s.optionalNullable(s.string()),
  billingProfile: s.optional(s.record(s.string(), s.unknown())),
  invoicesEmail: s.optional(s.string()),
  contractUpdatesEmail: s.optional(s.string()),
  doitInvoicingEnabled: s.optional(s.boolean()),
  managementAccounts: s.optional(s.array(s.string())),
  billingRules: s.optional(s.array(s.record(s.string(), s.unknown()))),
  priceBooks: s.optional(s.array(s.record(s.string(), s.unknown()))),
  customLineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const versionInternalSchema: Schema<Version> = s.object<Version>(versionProperties, {
  additionalProperties: s.json(),
});

export const versionSchema: Schema<Version> = s.lazySchema(() =>
  s.object<Version>(
    {
      ...versionProperties,
      invoicesEmail: s.optional(s.string().check(s.email())),
      contractUpdatesEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
