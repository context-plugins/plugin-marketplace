import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerBillingAddressResponseSchema,
  type CustomerBillingAddressResponse,
} from "./customer-billing-address-response.js";
import { customerConnectionsSchema, type CustomerConnections } from "./customer-connections.js";
import { customerCreationStateSchema, type CustomerCreationState } from "./customer-creation-state.js";
import { customerStatusSchema, type CustomerStatus } from "./customer-status.js";

export type Customer1 = {
  /**
   * Stable Paid customer display ID. Use this value as the `{id}` path parameter for customer
   * routes, for example `GET /api/v2/customers/cus_abc123/state`.
   */
  id: string;
  name: string;
  legalName: string | null;
  email: string;
  phone: string;
  website: string;
  externalId: string | null;
  /** Customer billing address, or null when no address is set. */
  billingAddress: CustomerBillingAddressResponse;
  creationState: CustomerCreationState;
  /** Customer status: churned when the customer is marked as churned, active otherwise. */
  status: CustomerStatus;
  churnDate: Date | null;
  vatNumber: string | null;
  metadata: Record<string, unknown> | null;
  /** ISO 4217 currency code, for example USD, EUR, or GBP. */
  defaultCurrency: string;
  /** Linked external system IDs for this customer. */
  connections: CustomerConnections;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customer1Schema: Schema<Customer1> = s.object<Customer1>(
  {
    id: s.string(),
    name: s.string(),
    legalName: s.nullable(s.string()),
    email: s.string(),
    phone: s.string(),
    website: s.string(),
    externalId: s.nullable(s.string()),
    billingAddress: customerBillingAddressResponseSchema,
    creationState: customerCreationStateSchema,
    status: customerStatusSchema,
    churnDate: s.nullable(s.dateTime()),
    vatNumber: s.nullable(s.string()),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
    defaultCurrency: s.string(),
    connections: customerConnectionsSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
