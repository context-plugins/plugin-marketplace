import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links68Schema, type Links68 } from "./links68.js";
import { partnerTypeSchema, type PartnerType } from "./partner-type.js";
import { userAgentTokenSchema, type UserAgentToken } from "./user-agent-token.js";

export type V2OrganizationsMePartnerResponse = {
  /**
   * Indicates the response contains a partner status object. Will always contain the string
   * `partner` for this endpoint.
   */
  resource: string;
  /**
   * Indicates the type of partner. Will be `null` if the currently authenticated organization is
   * not enrolled as a partner.
   */
  partnerType: PartnerType | null;
  /** Whether the current organization is receiving commissions. */
  isCommissionPartner?: boolean;
  /**
   * Array of User-Agent token objects. Present if the organization is a partner of type
   * `useragent`, or if they were in the past.
   */
  userAgentTokens?: UserAgentToken[];
  /**
   * The date the partner contract was signed, in ISO 8601 format. Omitted if no contract has been
   * signed (yet).
   */
  partnerContractSignedAt?: string | null;
  /**
   * Whether an update to the partner contract is available and requiring the organization's
   * agreement.
   */
  partnerContractUpdateAvailable?: boolean;
  /**
   * The expiration date of the signed partner contract, in ISO 8601 format. Omitted if contract has
   * no expiration date (yet).
   */
  partnerContractExpiresAt?: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links68;
};

export const v2OrganizationsMePartnerResponseSchema: Schema<V2OrganizationsMePartnerResponse> =
  s.object<V2OrganizationsMePartnerResponse>({
    resource: s.string(),
    partnerType: s.nullable(s.lazy(() => partnerTypeSchema)),
    isCommissionPartner: s.optional(s.boolean()),
    userAgentTokens: s.optional(s.array(s.lazy(() => userAgentTokenSchema))),
    partnerContractSignedAt: s.optionalNullable(s.string()),
    partnerContractUpdateAvailable: s.optional(s.boolean()),
    partnerContractExpiresAt: s.optional(s.string()),
    links: s.optional(s.lazy(() => links68Schema)),
    _keysMap: {
      links: "_links",
    },
  });
