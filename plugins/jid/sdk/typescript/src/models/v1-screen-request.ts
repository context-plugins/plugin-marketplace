import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextJidScreenApiSchema, type ContextJidScreenApi } from "./context-jid-screen-api.js";
import { PolicyJidScreenApi, policyJidScreenApiSchema } from "./policy-jid-screen-api.js";

export type V1ScreenRequest = {
  domain?: string;
  /** Only the host is used. */
  url?: string;
  email?: string;
  /** Ideally +E.164. */
  phone?: string;
  companyName?: string;
  /** A person's name: accepted, never looked up. */
  name?: string;
  /** Default lead, or purchase when only a url or domain is given. */
  context?: ContextJidScreenApi;
  /** @default PolicyJidScreenApi.Balanced */
  policy?: PolicyJidScreenApi;
  /** USD at stake */
  amount?: number;
  /** Default country for a phone number without + */
  country?: string;
  /** Keep the receipt 13 months instead of 30 days */
  retain?: boolean;
  /** Location check: country of the request (e.g. x-vercel-ip-country) */
  ipCountry?: string;
  /** Location check: ISO 3166-2 region of the request */
  ipRegion?: string;
  /** Accepted, not compared, not stored */
  ipCity?: string;
  /** Location check: ASN of the request's network (hosting/VPN recognition) */
  ipAsn?: number;
  /** Optional raw IP: used in memory for the Tor and ASN lookups only, never stored or returned */
  ip?: string;
  /** Location check: IANA time zone from the browser */
  browserTimezone?: string;
  /** Location check: the country the counterparty stated */
  statedCountry?: string;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ScreenRequestProperties: s.Shape<V1ScreenRequest> = {
  domain: s.optional(s.string()),
  url: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  companyName: s.optional(s.string()),
  name: s.optional(s.string()),
  context: s.optional(s.lazy(() => contextJidScreenApiSchema)),
  policy: s.defaulted(policyJidScreenApiSchema, PolicyJidScreenApi.Balanced),
  amount: s.optional(s.float64()),
  country: s.optional(s.string()),
  retain: s.optional(s.boolean()),
  ipCountry: s.optional(s.string()),
  ipRegion: s.optional(s.string()),
  ipCity: s.optional(s.string()),
  ipAsn: s.optional(s.int()),
  ip: s.optional(s.string()),
  browserTimezone: s.optional(s.string()),
  statedCountry: s.optional(s.string()),
  signal: s.optional(s.string()),
  site: s.optional(s.string()),
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

export const v1ScreenRequestInternalSchema: Schema<V1ScreenRequest> = s.object<V1ScreenRequest>(
  v1ScreenRequestProperties,
  { additionalProperties: s.json() },
);

export const v1ScreenRequestSchema: Schema<V1ScreenRequest> = s.lazySchema(() =>
  s.object<V1ScreenRequest>(
    {
      ...v1ScreenRequestProperties,
      domain: s.optional(s.string().check(s.maxLength(253))),
      url: s.optional(s.string().check(s.maxLength(2000))),
      email: s.optional(s.string().check(s.maxLength(254))),
      phone: s.optional(s.string().check(s.maxLength(40))),
      companyName: s.optional(s.string().check(s.maxLength(200))),
      name: s.optional(s.string().check(s.maxLength(200))),
      amount: s.optional(s.float64().check(s.gte(0))),
      country: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
      ipCountry: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
      statedCountry: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
