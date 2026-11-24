import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inetNumSchema, type InetNum } from "./inet-num.js";
import { irtSchema, type Irt } from "./irt.js";
import { routeSchema, type Route } from "./route.js";
import { whoisOrganizationSchema, type WhoisOrganization } from "./whois-organization.js";
import { whoisPersonSchema, type WhoisPerson } from "./whois-person.js";

export type IpWhoisResponse = {
  status?: boolean;
  ipAddress?: string;
  asNumber?: string;
  queryTime?: string;
  whoisServer?: string;
  whoisRawResponse?: string;
  rWhoisRawResponse?: string;
  inetNums?: InetNum[];
  organization?: WhoisOrganization;
  irt?: Irt;
  administrativeContacts?: WhoisPerson[];
  technicalContacts?: WhoisPerson[];
  abuseContacts?: WhoisPerson[];
  routes?: Route[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipWhoisResponseSchema: Schema<IpWhoisResponse> = s.object<IpWhoisResponse>(
  {
    status: s.optional(s.boolean()),
    ipAddress: s.optional(s.string()),
    asNumber: s.optional(s.string()),
    queryTime: s.optional(s.string()),
    whoisServer: s.optional(s.string()),
    whoisRawResponse: s.optional(s.string()),
    rWhoisRawResponse: s.optional(s.string()),
    inetNums: s.optional(s.array(s.lazy(() => inetNumSchema))),
    organization: s.optional(s.lazy(() => whoisOrganizationSchema)),
    irt: s.optional(s.lazy(() => irtSchema)),
    administrativeContacts: s.optional(s.array(s.lazy(() => whoisPersonSchema))),
    technicalContacts: s.optional(s.array(s.lazy(() => whoisPersonSchema))),
    abuseContacts: s.optional(s.array(s.lazy(() => whoisPersonSchema))),
    routes: s.optional(s.array(s.lazy(() => routeSchema))),
    _keysMap: {
      ipAddress: "ip_address",
      asNumber: "as_number",
      queryTime: "query_time",
      whoisServer: "whois_server",
      whoisRawResponse: "whois_raw_response",
      rWhoisRawResponse: "r_whois_raw_response",
      inetNums: "inet_nums",
      administrativeContacts: "administrative_contacts",
      technicalContacts: "technical_contacts",
      abuseContacts: "abuse_contacts",
    },
  },
  { additionalProperties: s.json() },
);
