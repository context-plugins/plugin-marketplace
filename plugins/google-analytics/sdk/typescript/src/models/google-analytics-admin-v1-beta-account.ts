import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A resource message representing a Google Analytics account. */
export type GoogleAnalyticsAdminV1BetaAccount = {
  /**
   * Output only. The URI for a Google Marketing Platform organization resource. Only set when this
   * account is connected to a GMP organization. Format:
   * marketingplatformadmin.googleapis.com/organizations/{org_id}
   */
  gmpOrganization?: string;
  /**
   * Identifier. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
   */
  name?: string;
  /** Required. Human-readable display name for this account. */
  displayName?: string;
  /** Output only. Time when account payload fields were last updated. */
  updateTime?: string;
  /** Country of business. Must be a Unicode CLDR region code. */
  regionCode?: string;
  /**
   * Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are
   * excluded from List results unless specifically requested.
   */
  deleted?: boolean;
  /** Output only. Time when this account was originally created. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccountSchema: Schema<GoogleAnalyticsAdminV1BetaAccount> =
  s.object<GoogleAnalyticsAdminV1BetaAccount>(
    {
      gmpOrganization: s.optional(s.string()),
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      regionCode: s.optional(s.string()),
      deleted: s.optional(s.boolean()),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
