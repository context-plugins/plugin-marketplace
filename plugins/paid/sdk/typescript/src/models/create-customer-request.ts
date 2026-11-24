import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerBillingAddressInputSchema,
  type CustomerBillingAddressInput,
} from "./customer-billing-address-input.js";
import { customerCreationStateSchema, type CustomerCreationState } from "./customer-creation-state.js";

export type CreateCustomerRequest = {
  name: string;
  legalName?: string | null;
  email?: string;
  phone?: string;
  website?: string;
  externalId?: string | null;
  billingAddress?: CustomerBillingAddressInput;
  creationState?: CustomerCreationState;
  vatNumber?: string | null;
  metadata?: Record<string, unknown> | null;
  defaultCurrency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomerRequestProperties: s.Shape<CreateCustomerRequest> = {
  name: s.string(),
  legalName: s.optionalNullable(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  website: s.optional(s.string()),
  externalId: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => customerBillingAddressInputSchema)),
  creationState: s.optional(s.lazy(() => customerCreationStateSchema)),
  vatNumber: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  defaultCurrency: s.optional(s.string()),
};

export const createCustomerRequestInternalSchema: Schema<CreateCustomerRequest> =
  s.object<CreateCustomerRequest>(createCustomerRequestProperties, { additionalProperties: s.json() });

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = s.lazySchema(() =>
  s.object<CreateCustomerRequest>(
    {
      ...createCustomerRequestProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
