import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Registrar details (used by domain_registrar, abuse_contact). */
export type RegistrarInformation = {
  id?: string;
  idType?: string;
  ianaId?: string;
  registryId?: string;
  handle?: string;
  status?: string;
  registrarName?: string;
  normalizedName?: string;
  whoisServer?: string;
  rdapServer?: string;
  websiteUrl?: string;
  emailAddress?: string;
  phoneNumber?: string;
  authoritativeRegistryName?: string;
  organizationNumber?: string;
  isSponsor?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registrarInformationSchema: Schema<RegistrarInformation> = s.object<RegistrarInformation>(
  {
    id: s.optional(s.string()),
    idType: s.optional(s.string()),
    ianaId: s.optional(s.string()),
    registryId: s.optional(s.string()),
    handle: s.optional(s.string()),
    status: s.optional(s.string()),
    registrarName: s.optional(s.string()),
    normalizedName: s.optional(s.string()),
    whoisServer: s.optional(s.string()),
    rdapServer: s.optional(s.string()),
    websiteUrl: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    authoritativeRegistryName: s.optional(s.string()),
    organizationNumber: s.optional(s.string()),
    isSponsor: s.optional(s.boolean()),
    _keysMap: {
      idType: "id_type",
      ianaId: "iana_id",
      registryId: "registry_id",
      registrarName: "registrar_name",
      normalizedName: "normalized_name",
      whoisServer: "whois_server",
      rdapServer: "rdap_server",
      websiteUrl: "website_url",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
      authoritativeRegistryName: "authoritative_registry_name",
      organizationNumber: "organization_number",
      isSponsor: "is_sponsor",
    },
  },
  { additionalProperties: s.json() },
);
