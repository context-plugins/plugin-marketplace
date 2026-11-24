import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerPaymentJournalInternalSchema,
  customerPaymentJournalSchema,
  type CustomerPaymentJournal,
} from "./customer-payment-journal.js";

export type CompaniesApiCustomerPaymentJournalsResponse = {
  value?: CustomerPaymentJournal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiCustomerPaymentJournalsResponseProperties: s.Shape<CompaniesApiCustomerPaymentJournalsResponse> =
  {
    value: s.optional(s.array(s.lazy(() => customerPaymentJournalInternalSchema))),
  };

export const companiesApiCustomerPaymentJournalsResponseInternalSchema: Schema<CompaniesApiCustomerPaymentJournalsResponse> =
  s.object<CompaniesApiCustomerPaymentJournalsResponse>(
    companiesApiCustomerPaymentJournalsResponseProperties,
    { additionalProperties: s.json() },
  );

export const companiesApiCustomerPaymentJournalsResponseSchema: Schema<CompaniesApiCustomerPaymentJournalsResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiCustomerPaymentJournalsResponse>(
      {
        ...companiesApiCustomerPaymentJournalsResponseProperties,
        value: s.optional(s.array(s.lazy(() => customerPaymentJournalSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
