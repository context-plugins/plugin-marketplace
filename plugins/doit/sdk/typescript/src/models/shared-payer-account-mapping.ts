import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * One AWS account under a linked shared payer - a member account or the payer's own management
 * account - and the customer it is currently mapped to.
 */
export type SharedPayerAccountMapping = {
  /** Asset ID of the AWS account. */
  assetId?: string;
  /** Display name of the AWS account. */
  accountName?: string;
  /** AWS account ID. */
  accountId?: string;
  /** AWS account ID of the management (payer) account this account is under. */
  payerId?: string;
  /** Display name of the management (payer) account. */
  payerName?: string;
  /**
   * Customer the account is currently mapped to. Equal to `{customerId}` (the reseller itself) when
   * the account has not been reassigned to an end customer.
   */
  customerId?: string;
  /** Display name of `customerId`. */
  customerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerAccountMappingSchema: Schema<SharedPayerAccountMapping> =
  s.object<SharedPayerAccountMapping>(
    {
      assetId: s.optional(s.string()),
      accountName: s.optional(s.string()),
      accountId: s.optional(s.string()),
      payerId: s.optional(s.string()),
      payerName: s.optional(s.string()),
      customerId: s.optional(s.string()),
      customerName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
