import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description9Schema, type Description9 } from "./unions/description9.js";
import { domainsSchema, type Domains } from "./unions/domains.js";
import { samlProviderIdSchema, type SamlProviderId } from "./unions/saml-provider-id.js";

export type BodyOrganizationsCreate = {
  /** The organization logo image file to upload. Must be a PNG file and 120x120 pixels. */
  logo: Uint8Array;
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
};

export const bodyOrganizationsCreateSchema: Schema<BodyOrganizationsCreate> =
  s.object<BodyOrganizationsCreate>({
    logo: s.bytes(),
    displayName: s.string(),
    description: s.optional(s.lazy(() => description9Schema)),
    domains: s.optional(s.lazy(() => domainsSchema)),
    samlProviderId: s.optional(s.lazy(() => samlProviderIdSchema)),
    _keysMap: {
      displayName: "display_name",
      samlProviderId: "saml_provider_id",
    },
  });
