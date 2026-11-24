import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VendorPaymentJournal = {
  id?: string;
  code?: string;
  displayName?: string;
  lastModifiedDateTime?: Date;
  balancingAccountId?: string;
  balancingAccountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorPaymentJournalProperties: s.Shape<VendorPaymentJournal> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
  balancingAccountId: s.optional(s.string()),
  balancingAccountNumber: s.optional(s.string()),
};

export const vendorPaymentJournalInternalSchema: Schema<VendorPaymentJournal> =
  s.object<VendorPaymentJournal>(vendorPaymentJournalProperties, { additionalProperties: s.json() });

export const vendorPaymentJournalSchema: Schema<VendorPaymentJournal> = s.lazySchema(() =>
  s.object<VendorPaymentJournal>(
    {
      ...vendorPaymentJournalProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      balancingAccountNumber: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
