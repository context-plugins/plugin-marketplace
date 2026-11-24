import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  generalLedgerEntryInternalSchema,
  generalLedgerEntrySchema,
  type GeneralLedgerEntry,
} from "./general-ledger-entry.js";

export type CompaniesApiGeneralLedgerEntriesResponse = {
  value?: GeneralLedgerEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiGeneralLedgerEntriesResponseProperties: s.Shape<CompaniesApiGeneralLedgerEntriesResponse> =
  {
    value: s.optional(s.array(s.lazy(() => generalLedgerEntryInternalSchema))),
  };

export const companiesApiGeneralLedgerEntriesResponseInternalSchema: Schema<CompaniesApiGeneralLedgerEntriesResponse> =
  s.object<CompaniesApiGeneralLedgerEntriesResponse>(companiesApiGeneralLedgerEntriesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiGeneralLedgerEntriesResponseSchema: Schema<CompaniesApiGeneralLedgerEntriesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiGeneralLedgerEntriesResponse>(
      {
        ...companiesApiGeneralLedgerEntriesResponseProperties,
        value: s.optional(s.array(s.lazy(() => generalLedgerEntrySchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
