import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

export type Customer = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  id?: string;
  /** Customer name */
  name?: string;
  /** Customer email address */
  email?: string;
  invoiceCurrency?: CurrencyCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerProperties: s.Shape<Customer> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  invoiceCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
};

export const customerInternalSchema: Schema<Customer> = s.object<Customer>(customerProperties, {
  additionalProperties: s.json(),
});

export const customerSchema: Schema<Customer> = s.lazySchema(() =>
  s.object<Customer>(
    {
      ...customerProperties,
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
