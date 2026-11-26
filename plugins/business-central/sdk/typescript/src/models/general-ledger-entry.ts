import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeneralLedgerEntry = {
  id?: string;
  entryNumber?: number;
  postingDate?: string;
  documentNumber?: string;
  documentType?: string;
  accountId?: string;
  accountNumber?: string;
  description?: string;
  debitAmount?: number;
  creditAmount?: number;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const generalLedgerEntryProperties: s.Shape<GeneralLedgerEntry> = {
  id: s.optional(s.string()),
  entryNumber: s.optional(s.int()),
  postingDate: s.optional(s.dateOnly()),
  documentNumber: s.optional(s.string()),
  documentType: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  description: s.optional(s.string()),
  debitAmount: s.optional(s.float64()),
  creditAmount: s.optional(s.float64()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const generalLedgerEntryInternalSchema: Schema<GeneralLedgerEntry> = s.object<GeneralLedgerEntry>(
  generalLedgerEntryProperties,
  { additionalProperties: s.json() },
);

export const generalLedgerEntrySchema: Schema<GeneralLedgerEntry> = s.lazySchema(() =>
  s.object<GeneralLedgerEntry>(
    {
      ...generalLedgerEntryProperties,
      documentNumber: s.optional(s.string().check(s.maxLength(20))),
      accountNumber: s.optional(s.string().check(s.maxLength(20))),
      description: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
