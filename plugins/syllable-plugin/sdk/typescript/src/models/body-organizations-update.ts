import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description9Schema, type Description9 } from "./unions/description9.js";
import { domainsSchema, type Domains } from "./unions/domains.js";
import { logoSchema, type Logo } from "./unions/logo.js";
import { samlProviderIdSchema, type SamlProviderId } from "./unions/saml-provider-id.js";
import { updateCommentsSchema, type UpdateComments } from "./unions/update-comments.js";

export type BodyOrganizationsUpdate = {
  /**
   * The organization logo image file to upload. Must be a PNG file and 120x120 pixels. If not
   * provided, the logo will not be updated.
   */
  logo?: Logo;
  /** The human-readable display name of the organization */
  displayName: string;
  /** Description of the organization */
  description?: Description9;
  /**
   * Comma-delimited list of domains that users at the organization may have in their email
   * addresses
   */
  domains?: Domains;
  /** SAML provider ID for user authentication */
  samlProviderId?: SamlProviderId;
  /** Comments about the update */
  updateComments?: UpdateComments;
};

export const bodyOrganizationsUpdateSchema: Schema<BodyOrganizationsUpdate> =
  s.object<BodyOrganizationsUpdate>({
    logo: s.optional(s.lazy(() => logoSchema)),
    displayName: s.string(),
    description: s.optional(s.lazy(() => description9Schema)),
    domains: s.optional(s.lazy(() => domainsSchema)),
    samlProviderId: s.optional(s.lazy(() => samlProviderIdSchema)),
    updateComments: s.optional(s.lazy(() => updateCommentsSchema)),
    _keysMap: {
      displayName: "display_name",
      samlProviderId: "saml_provider_id",
      updateComments: "update_comments",
    },
  });
