import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessingOptionsBillV3OrganizationsApi = {
  /**
   * Set as `true` if the mailing address is the same as the physical address. The default value is
   * `true`.
   */
  mailingAddressSameAsPhysical?: boolean;
  /**
   * Rule for how ACH transfers are made from the organization funding bank account to vendors.
   * * Set as `true` for an individual ACH transfer for each payment made.
   * * Set as `false` for a single batch ACH transfer for all payments made in a day. The default
   *   value is `false`.
   *
   * **Note**: You can set this field only when you update an organization (`PATCH
   * /v3/organizations/{organizationId}`).
   */
  individualTransferOut?: boolean;
  /**
   * Rule for how ACH transfers are made from customers to the organization funding bank account.
   * * Set as `true` for an individual ACH transfer for each payment received.
   * * Set as `false` for a single batch ACH transfer for all payments received in a day. The
   *   default value is `false`.
   *
   * **Note**: You can set this field only when you update an organization (`PATCH
   * /v3/organizations/{organizationId}`).
   */
  individualTransferIn?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptionsBillV3OrganizationsApiSchema: Schema<ProcessingOptionsBillV3OrganizationsApi> =
  s.object<ProcessingOptionsBillV3OrganizationsApi>(
    {
      mailingAddressSameAsPhysical: s.optional(s.boolean()),
      individualTransferOut: s.optional(s.boolean()),
      individualTransferIn: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
