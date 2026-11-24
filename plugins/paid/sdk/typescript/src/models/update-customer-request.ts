import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerBillingAddressInputSchema,
  type CustomerBillingAddressInput,
} from "./customer-billing-address-input.js";
import { customerCreationStateSchema, type CustomerCreationState } from "./customer-creation-state.js";

export type UpdateCustomerRequest = {
  name?: string;
  legalName?: string | null;
  email?: string;
  phone?: string;
  website?: string;
  externalId?: string | null;
  billingAddress?: CustomerBillingAddressInput;
  creationState?: CustomerCreationState;
  churnDate?: Date | null;
  vatNumber?: string | null;
  metadata?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCustomerRequestProperties: s.Shape<UpdateCustomerRequest> = {
  name: s.optional(s.string()),
  legalName: s.optionalNullable(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  website: s.optional(s.string()),
  externalId: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => customerBillingAddressInputSchema)),
  creationState: s.optional(s.lazy(() => customerCreationStateSchema)),
  churnDate: s.optionalNullable(s.dateTime()),
  vatNumber: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
};

export const updateCustomerRequestInternalSchema: Schema<UpdateCustomerRequest> =
  s.object<UpdateCustomerRequest>(updateCustomerRequestProperties, { additionalProperties: s.json() });

export const updateCustomerRequestSchema: Schema<UpdateCustomerRequest> = s.lazySchema(() =>
  s.object<UpdateCustomerRequest>(
    {
      ...updateCustomerRequestProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
