import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. A valid SecurityAction must contain at least one condition. */
export type GoogleCloudApigeeV1SecurityActionConditionConfig2 = {
  /** Optional. A list of API Products. Limit 1000 per action. */
  apiProducts?: string[];
  /** Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action. */
  userAgents?: string[];
  /** Optional. A list of developer apps. Limit 1000 per action. */
  developerApps?: string[];
  /**
   * Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.
   */
  ipAddressRanges?: string[];
  /**
   * Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content
   * Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API
   * Scraper, Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and
   * Public Cloud Google.
   */
  botReasons?: string[];
  /**
   * Optional. Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE
   * methods. Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.
   */
  httpMethods?: string[];
  /** Optional. A list of developers. Limit 1000 per action. */
  developers?: string[];
  /** Optional. A list of access_tokens. Limit 1000 per action. */
  accessTokens?: string[];
  /**
   * Optional. A list of ASN numbers to act on, e.g. 23.
   * https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32
   * because of https://linter.aip.dev/141/forbidden-types.
   */
  asns?: string[];
  /** Optional. A list of API keys. Limit 1000 per action. */
  apiKeys?: string[];
  /**
   * Optional. A list of countries/region codes to act on, e.g. US. This follows
   * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
   */
  regionCodes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionConditionConfig2Schema: Schema<GoogleCloudApigeeV1SecurityActionConditionConfig2> =
  s.object<GoogleCloudApigeeV1SecurityActionConditionConfig2>(
    {
      apiProducts: s.optional(s.array(s.string())),
      userAgents: s.optional(s.array(s.string())),
      developerApps: s.optional(s.array(s.string())),
      ipAddressRanges: s.optional(s.array(s.string())),
      botReasons: s.optional(s.array(s.string())),
      httpMethods: s.optional(s.array(s.string())),
      developers: s.optional(s.array(s.string())),
      accessTokens: s.optional(s.array(s.string())),
      asns: s.optional(s.array(s.string())),
      apiKeys: s.optional(s.array(s.string())),
      regionCodes: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
