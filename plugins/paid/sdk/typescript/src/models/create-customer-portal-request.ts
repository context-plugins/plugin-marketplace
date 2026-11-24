import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCustomerPortalRequest = {
  /**
   * The Paid customer ID (display ID or UUID). Either this or externalCustomerId must be provided.
   */
  customerId?: string;
  /** Your external customer ID. Either this or customerId must be provided. */
  externalCustomerId?: string;
  returnUrl?: string;
  expiresAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomerPortalRequestProperties: s.Shape<CreateCustomerPortalRequest> = {
  customerId: s.optional(s.string()),
  externalCustomerId: s.optional(s.string()),
  returnUrl: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
};

export const createCustomerPortalRequestInternalSchema: Schema<CreateCustomerPortalRequest> =
  s.object<CreateCustomerPortalRequest>(createCustomerPortalRequestProperties, {
    additionalProperties: s.json(),
  });

export const createCustomerPortalRequestSchema: Schema<CreateCustomerPortalRequest> = s.lazySchema(() =>
  s.object<CreateCustomerPortalRequest>(
    {
      ...createCustomerPortalRequestProperties,
      returnUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
