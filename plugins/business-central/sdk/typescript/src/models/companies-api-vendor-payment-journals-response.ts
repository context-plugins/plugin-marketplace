import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  vendorPaymentJournalInternalSchema,
  vendorPaymentJournalSchema,
  type VendorPaymentJournal,
} from "./vendor-payment-journal.js";

export type CompaniesApiVendorPaymentJournalsResponse = {
  value?: VendorPaymentJournal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiVendorPaymentJournalsResponseProperties: s.Shape<CompaniesApiVendorPaymentJournalsResponse> =
  {
    value: s.optional(s.array(s.lazy(() => vendorPaymentJournalInternalSchema))),
  };

export const companiesApiVendorPaymentJournalsResponseInternalSchema: Schema<CompaniesApiVendorPaymentJournalsResponse> =
  s.object<CompaniesApiVendorPaymentJournalsResponse>(companiesApiVendorPaymentJournalsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiVendorPaymentJournalsResponseSchema: Schema<CompaniesApiVendorPaymentJournalsResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiVendorPaymentJournalsResponse>(
      {
        ...companiesApiVendorPaymentJournalsResponseProperties,
        value: s.optional(s.array(s.lazy(() => vendorPaymentJournalSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
