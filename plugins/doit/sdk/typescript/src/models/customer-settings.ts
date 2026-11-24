import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

/**
 * Customer settings. Shared by the `getCustomer` response and the `updateCustomer` request body so
 * a value is always read and written at the same path.
 *
 * `currency` accepts only the listed codes; any other value is rejected with `400`. Unlike
 * `urlSlug` and `allowedInviteDomains` it cannot be cleared - no value unsets it.
 */
export type CustomerSettings = {
  /** Currency code for monetary values. */
  currency?: Currency;
  /**
   * Email domains allowed to self-invite into the customer. Updating this field requires the
   * `UsersManager` permission in addition to `Settings`. An empty array clears the list.
   */
  allowedInviteDomains?: string[];
  /**
   * Whether users of this customer are required to enroll in multi-factor authentication. A missing
   * value is treated as `true`. Disabling this does not remove MFA enrollments existing users
   * already have.
   */
  mfaRequired?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerSettingsSchema: Schema<CustomerSettings> = s.object<CustomerSettings>(
  {
    currency: s.optional(s.lazy(() => currencySchema)),
    allowedInviteDomains: s.optional(s.array(s.string())),
    mfaRequired: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
