import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eligibilityInfoSchema, type EligibilityInfo } from "./eligibility-info.js";
import { personalInformationSchema, type PersonalInformation } from "./personal-information.js";
import { registrarInformationSchema, type RegistrarInformation } from "./registrar-information.js";
import { registryDataSchema, type RegistryData } from "./registry-data.js";
import { resellerContactSchema, type ResellerContact } from "./reseller-contact.js";

export type WhoisHistoricalItem = {
  num?: number;
  status?: boolean;
  domainName?: string;
  queryTime?: string;
  whoisServer?: string;
  domainRegistered?: string;
  secureDns?: boolean;
  domainHandle?: string;
  createDate?: string;
  updateDate?: string;
  expiryDate?: string;
  /** Registrar details (used by domain_registrar, abuse_contact). */
  domainRegistrar?: RegistrarInformation;
  resellerContact?: ResellerContact;
  /** Contact block (registrant/administrative/technical/billing). */
  registrantContact?: PersonalInformation;
  /** Contact block (registrant/administrative/technical/billing). */
  administrativeContact?: PersonalInformation;
  /** Contact block (registrant/administrative/technical/billing). */
  technicalContact?: PersonalInformation;
  /** Contact block (registrant/administrative/technical/billing). */
  billingContact?: PersonalInformation;
  eligibilityInfo?: EligibilityInfo;
  /** Registrar details (used by domain_registrar, abuse_contact). */
  abuseContact?: RegistrarInformation;
  nameServers?: string[];
  domainStatus?: string[];
  whoisRawDomain?: string;
  registryData?: RegistryData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const whoisHistoricalItemSchema: Schema<WhoisHistoricalItem> = s.object<WhoisHistoricalItem>(
  {
    num: s.optional(s.int()),
    status: s.optional(s.boolean()),
    domainName: s.optional(s.string()),
    queryTime: s.optional(s.string()),
    whoisServer: s.optional(s.string()),
    domainRegistered: s.optional(s.string()),
    secureDns: s.optional(s.boolean()),
    domainHandle: s.optional(s.string()),
    createDate: s.optional(s.string()),
    updateDate: s.optional(s.string()),
    expiryDate: s.optional(s.string()),
    domainRegistrar: s.optional(s.lazy(() => registrarInformationSchema)),
    resellerContact: s.optional(s.lazy(() => resellerContactSchema)),
    registrantContact: s.optional(s.lazy(() => personalInformationSchema)),
    administrativeContact: s.optional(s.lazy(() => personalInformationSchema)),
    technicalContact: s.optional(s.lazy(() => personalInformationSchema)),
    billingContact: s.optional(s.lazy(() => personalInformationSchema)),
    eligibilityInfo: s.optional(s.lazy(() => eligibilityInfoSchema)),
    abuseContact: s.optional(s.lazy(() => registrarInformationSchema)),
    nameServers: s.optional(s.array(s.string())),
    domainStatus: s.optional(s.array(s.string())),
    whoisRawDomain: s.optional(s.string()),
    registryData: s.optional(s.lazy(() => registryDataSchema)),
    _keysMap: {
      domainName: "domain_name",
      queryTime: "query_time",
      whoisServer: "whois_server",
      domainRegistered: "domain_registered",
      secureDns: "secure_dns",
      domainHandle: "domain_handle",
      createDate: "create_date",
      updateDate: "update_date",
      expiryDate: "expiry_date",
      domainRegistrar: "domain_registrar",
      resellerContact: "reseller_contact",
      registrantContact: "registrant_contact",
      administrativeContact: "administrative_contact",
      technicalContact: "technical_contact",
      billingContact: "billing_contact",
      eligibilityInfo: "eligibility_info",
      abuseContact: "abuse_contact",
      nameServers: "name_servers",
      domainStatus: "domain_status",
      whoisRawDomain: "whois_raw_domain",
      registryData: "registry_data",
    },
  },
  { additionalProperties: s.json() },
);
