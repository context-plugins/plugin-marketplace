import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerRazorpayCustomersApiInternalSchema,
  customerRazorpayCustomersApiSchema,
  type CustomerRazorpayCustomersApi,
} from "./customer-razorpay-customers-api.js";
import { entitySchema, type Entity } from "./entity.js";

export type CustomersResponse = {
  entity?: Entity;
  /** Number of items in the current page. */
  count?: number;
  items?: CustomerRazorpayCustomersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customersResponseProperties: s.Shape<CustomersResponse> = {
  entity: s.optional(s.lazy(() => entitySchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => customerRazorpayCustomersApiInternalSchema))),
};

export const customersResponseInternalSchema: Schema<CustomersResponse> = s.object<CustomersResponse>(
  customersResponseProperties,
  { additionalProperties: s.json() },
);

export const customersResponseSchema: Schema<CustomersResponse> = s.lazySchema(() =>
  s.object<CustomersResponse>(
    {
      ...customersResponseProperties,
      items: s.optional(s.array(s.lazy(() => customerRazorpayCustomersApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
