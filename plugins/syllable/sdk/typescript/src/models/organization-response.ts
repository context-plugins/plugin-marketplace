import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description30Schema, type Description30 } from "./unions/description30.js";
import { domains2Schema, type Domains2 } from "./unions/domains2.js";
import { lastUpdatedBy7Schema, type LastUpdatedBy7 } from "./unions/last-updated-by7.js";
import { lastUpdatedComments5Schema, type LastUpdatedComments5 } from "./unions/last-updated-comments5.js";
import { logoUrlSchema, type LogoUrl } from "./unions/logo-url.js";
import { samlProviderIdSchema, type SamlProviderId } from "./unions/saml-provider-id.js";
import { slugSchema, type Slug } from "./unions/slug.js";

export type OrganizationResponse = {
  /** The human-readable display name of the organization. */
  displayName: string;
  /** Description of the organization. */
  description?: Description30;
  /**
   * Comma-delimited list of domains that users at the organization may have in their email
   * addresses.
   */
  domains?: Domains2;
  /** SAML provider ID for user authentication */
  samlProviderId?: SamlProviderId;
  /** The internal ID of the organization. */
  id: number;
  /** Comments for the most recent edit to the organization. */
  lastUpdatedComments?: LastUpdatedComments5;
  /** Unique, non-human-readable hash for the organization */
  name: string;
  /**
   * The slug of the organization used for URLs in the Console UI. Null until slug backfill has been
   * run.
   */
  slug?: Slug;
  /** The timestamp of the most recent update to the organization */
  lastUpdated: Date;
  /** The email of the user who most recently updated the organization */
  lastUpdatedBy?: LastUpdatedBy7;
  /**
   * CDN URL. The org will always have a logo, but this value will be null on a response to an
   * update where no logo was provided on the request
   */
  logoUrl?: LogoUrl;
};

export const organizationResponseSchema: Schema<OrganizationResponse> = s.object<OrganizationResponse>({
  displayName: s.string(),
  description: s.optional(s.lazy(() => description30Schema)),
  domains: s.optional(s.lazy(() => domains2Schema)),
  samlProviderId: s.optional(s.lazy(() => samlProviderIdSchema)),
  id: s.int(),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments5Schema)),
  name: s.string(),
  slug: s.optional(s.lazy(() => slugSchema)),
  lastUpdated: s.dateTime(),
  lastUpdatedBy: s.optional(s.lazy(() => lastUpdatedBy7Schema)),
  logoUrl: s.optional(s.lazy(() => logoUrlSchema)),
  _keysMap: {
    displayName: "display_name",
    samlProviderId: "saml_provider_id",
    lastUpdatedComments: "last_updated_comments",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
    logoUrl: "logo_url",
  },
});
