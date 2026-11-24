import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import {
  paymentResponseInternalSchema,
  paymentResponseSchema,
  type PaymentResponse,
} from "./payment-response.js";

export type Payments = {
  payments?: PaymentResponse[] | null;
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsProperties: s.Shape<Payments> = {
  payments: s.optionalNullable(s.array(s.lazy(() => paymentResponseInternalSchema))),
  pagination: s.optional(s.lazy(() => paginationSchema)),
};

export const paymentsInternalSchema: Schema<Payments> = s.object<Payments>(paymentsProperties, {
  additionalProperties: s.json(),
});

export const paymentsSchema: Schema<Payments> = s.lazySchema(() =>
  s.object<Payments>(
    {
      ...paymentsProperties,
      payments: s.optionalNullable(s.array(s.lazy(() => paymentResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
