import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentTermInternalSchema, paymentTermSchema, type PaymentTerm } from "./payment-term.js";

export type CompaniesApiPaymentTermsResponse = {
  value?: PaymentTerm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiPaymentTermsResponseProperties: s.Shape<CompaniesApiPaymentTermsResponse> = {
  value: s.optional(s.array(s.lazy(() => paymentTermInternalSchema))),
};

export const companiesApiPaymentTermsResponseInternalSchema: Schema<CompaniesApiPaymentTermsResponse> =
  s.object<CompaniesApiPaymentTermsResponse>(companiesApiPaymentTermsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiPaymentTermsResponseSchema: Schema<CompaniesApiPaymentTermsResponse> = s.lazySchema(
  () =>
    s.object<CompaniesApiPaymentTermsResponse>(
      {
        ...companiesApiPaymentTermsResponseProperties,
        value: s.optional(s.array(s.lazy(() => paymentTermSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
