import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerBillingAddressResponseSchema,
  type CustomerBillingAddressResponse,
} from "./customer-billing-address-response.js";

export type CustomerStateCustomer = {
  /**
   * Stable Paid customer display ID. Use this value as the `{id}` path parameter for customer
   * routes, for example `GET /api/v2/customers/cus_abc123/state`.
   */
  id: string;
  name: string;
  externalId: string | null;
  /** Customer billing address, or null when no address is set. */
  billingAddress: CustomerBillingAddressResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateCustomerSchema: Schema<CustomerStateCustomer> = s.object<CustomerStateCustomer>(
  {
    id: s.string(),
    name: s.string(),
    externalId: s.nullable(s.string()),
    billingAddress: customerBillingAddressResponseSchema,
  },
  { additionalProperties: s.json() },
);
