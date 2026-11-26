import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentMethodInternalSchema, paymentMethodSchema, type PaymentMethod } from "./payment-method.js";

export type CompaniesApiPaymentMethodsResponse = {
  value?: PaymentMethod[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiPaymentMethodsResponseProperties: s.Shape<CompaniesApiPaymentMethodsResponse> = {
  value: s.optional(s.array(s.lazy(() => paymentMethodInternalSchema))),
};

export const companiesApiPaymentMethodsResponseInternalSchema: Schema<CompaniesApiPaymentMethodsResponse> =
  s.object<CompaniesApiPaymentMethodsResponse>(companiesApiPaymentMethodsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiPaymentMethodsResponseSchema: Schema<CompaniesApiPaymentMethodsResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiPaymentMethodsResponse>(
      {
        ...companiesApiPaymentMethodsResponseProperties,
        value: s.optional(s.array(s.lazy(() => paymentMethodSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
