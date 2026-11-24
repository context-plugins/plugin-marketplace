import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { creationSourceSchema, type CreationSource } from "./creation-source.js";
import { creationStateSchema, type CreationState } from "./creation-state.js";
import { taxExemptStatusSchema, type TaxExemptStatus } from "./tax-exempt-status.js";

export type Customer = {
  id: string;
  organizationId: string;
  name: string;
  externalId?: string;
  phone?: string;
  employeeCount?: number;
  annualRevenue?: number;
  taxExemptStatus?: TaxExemptStatus;
  creationSource?: CreationSource;
  creationState?: CreationState;
  website?: string;
  billingAddress?: Address;
  /** Flexible JSON field for storing custom metadata about the customer */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerSchema: Schema<Customer> = s.object<Customer>(
  {
    id: s.string(),
    organizationId: s.string(),
    name: s.string(),
    externalId: s.optional(s.string()),
    phone: s.optional(s.string()),
    employeeCount: s.optional(s.float64()),
    annualRevenue: s.optional(s.float64()),
    taxExemptStatus: s.optional(s.lazy(() => taxExemptStatusSchema)),
    creationSource: s.optional(s.lazy(() => creationSourceSchema)),
    creationState: s.optional(s.lazy(() => creationStateSchema)),
    website: s.optional(s.string()),
    billingAddress: s.optional(s.lazy(() => addressSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
