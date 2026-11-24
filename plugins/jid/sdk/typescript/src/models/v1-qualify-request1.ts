import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextInternalSchema, contextSchema, type Context } from "./context.js";
import { policySchema, type Policy } from "./policy.js";

export type V1QualifyRequest1 = {
  email?: string;
  domain: string;
  companyName?: string;
  context?: Context;
  /** Location check: country of the request (e.g. x-vercel-ip-country). Stored. */
  ipCountry?: string;
  /** Location check: ISO 3166-2 region of the request (US-CA or CA). Stored. */
  ipRegion?: string;
  /** Accepted, not compared, not stored, not returned */
  ipCity?: string;
  /** Location check: ASN of the request's network (hosting/VPN recognition). Not stored. */
  ipAsn?: number;
  /** Location check: IANA time zone from the browser. Compared, not stored. */
  browserTimezone?: string;
  /**
   * Location check: the country the submitter stated (same as context.country; either may be sent)
   */
  statedCountry?: string;
  /**
   * Optional raw IP: used in memory for the Tor and network lookups (Jid's Tor and GeoLite2 copies;
   * IPinfo when enabled). Never stored, hashed or returned.
   */
  ip?: string;
  /**
   * Optional business phone: validity and country code (compared with the location), in memory
   * only, never stored
   */
  phone?: string;
  /**
   * Jid Signals token from the visitor's browser (the jid_signal form field set by
   * https://jid.com/s/1.js; jid_signal is also accepted). When it verifies, its country, region,
   * city, network type and time zone replace the ip_* fields and browser_timezone. Expired, altered
   * or other-site tokens are skipped, never negative. See /signals.
   */
  signal?: string;
  /**
   * The submitting website's domain. Binds the signal token loosely: a token issued to another site
   * is skipped.
   */
  site?: string;
  /** Add a short summary written only from the signals. */
  summary?: boolean;
  /** How cautious `engage` is. Default balanced. */
  policy?: Policy;
  /** Opt in to keeping the message with the result for 13 months (default: hash only, 30 days). */
  retain?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1QualifyRequest1Properties: s.Shape<V1QualifyRequest1> = {
  email: s.optional(s.string()),
  domain: s.string(),
  companyName: s.optional(s.string()),
  context: s.optional(s.lazy(() => contextInternalSchema)),
  ipCountry: s.optional(s.string()),
  ipRegion: s.optional(s.string()),
  ipCity: s.optional(s.string()),
  ipAsn: s.optional(s.int()),
  browserTimezone: s.optional(s.string()),
  statedCountry: s.optional(s.string()),
  ip: s.optional(s.string()),
  phone: s.optional(s.string()),
  signal: s.optional(s.string()),
  site: s.optional(s.string()),
  summary: s.optional(s.boolean()),
  policy: s.optional(s.lazy(() => policySchema)),
  retain: s.optional(s.boolean()),
  _keysMap: {
    companyName: "company_name",
    ipCountry: "ip_country",
    ipRegion: "ip_region",
    ipCity: "ip_city",
    ipAsn: "ip_asn",
    browserTimezone: "browser_timezone",
    statedCountry: "stated_country",
  },
};

export const v1QualifyRequest1InternalSchema: Schema<V1QualifyRequest1> = s.object<V1QualifyRequest1>(
  v1QualifyRequest1Properties,
  { additionalProperties: s.json() },
);

export const v1QualifyRequest1Schema: Schema<V1QualifyRequest1> = s.lazySchema(() =>
  s.object<V1QualifyRequest1>(
    {
      ...v1QualifyRequest1Properties,
      email: s.optional(s.string().check(s.maxLength(254))),
      domain: s.string().check(s.maxLength(253)),
      companyName: s.optional(s.string().check(s.maxLength(200))),
      context: s.optional(s.lazy(() => contextSchema)),
      ipCountry: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
      statedCountry: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
      phone: s.optional(s.string().check(s.maxLength(40))),
    },
    { additionalProperties: s.json() },
  ),
);
