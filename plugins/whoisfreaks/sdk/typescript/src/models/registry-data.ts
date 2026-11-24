import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { registrarInformationSchema, type RegistrarInformation } from "./registrar-information.js";

export type RegistryData = {
  domainName?: string;
  queryTime?: string;
  whoisServer?: string;
  domainRegistered?: string;
  createDate?: string;
  updateDate?: string;
  expiryDate?: string;
  /** Registrar details (used by domain_registrar, abuse_contact). */
  domainRegistrar?: RegistrarInformation;
  nameServers?: string[];
  domainStatus?: string[];
  whoisRawDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryDataSchema: Schema<RegistryData> = s.object<RegistryData>(
  {
    domainName: s.optional(s.string()),
    queryTime: s.optional(s.string()),
    whoisServer: s.optional(s.string()),
    domainRegistered: s.optional(s.string()),
    createDate: s.optional(s.string()),
    updateDate: s.optional(s.string()),
    expiryDate: s.optional(s.string()),
    domainRegistrar: s.optional(s.lazy(() => registrarInformationSchema)),
    nameServers: s.optional(s.array(s.string())),
    domainStatus: s.optional(s.array(s.string())),
    whoisRawDomain: s.optional(s.string()),
    _keysMap: {
      domainName: "domain_name",
      queryTime: "query_time",
      whoisServer: "whois_server",
      domainRegistered: "domain_registered",
      createDate: "create_date",
      updateDate: "update_date",
      expiryDate: "expiry_date",
      domainRegistrar: "domain_registrar",
      nameServers: "name_servers",
      domainStatus: "domain_status",
      whoisRawDomain: "whois_raw_domain",
    },
  },
  { additionalProperties: s.json() },
);
