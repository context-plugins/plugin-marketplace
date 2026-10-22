import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dnsLookupFieldSchema, type DnsLookupField } from "./dns-lookup-field.js";
import {
  logLevelForFailedLookupsSchema,
  type LogLevelForFailedLookups,
} from "./log-level-for-failed-lookups.js";
import { reverseDnsLookupFieldSchema, type ReverseDnsLookupField } from "./reverse-dns-lookup-field.js";

export type FunctionConfSchemaDnsLookup = {
  /** List of field names on which to perform DNS lookup */
  dnsLookupFields?: DnsLookupField[];
  /** List of field names on which to perform reverse DNS lookup */
  reverseLookupFields?: ReverseDnsLookupField[];
  /**
   * IPs, in RFC 5952 format, of the DNS servers to use for resolution. Examples: IPv4 1.1.1.1,
   * 4.2.2.2:53, or IPv6 [2001:4860:4860::8888], [2001:4860:4860::8888]:1053. If not specified,
   * system's DNS will be used.
   */
  dnsServers?: string[];
  /** How frequently to expire and refetch DNS cache. Use 0 to disable. */
  cacheTtl?: number;
  /**
   * The maximum number of DNS resolutions to be cached locally. Leave at default unless you
   * understand the implications of changing.
   */
  maxCacheSize?: number;
  /**
   * Attempt to resolve DNS short names using the search or domain directive from /etc/resolv.conf
   */
  useResolvConf?: boolean;
  /**
   * If unable to resolve a DNS short name, make a DNS.lookup() call to resolve it. Caution: This
   * might degrade performance in unrelated areas of \@{product}.
   */
  lookupFallback?: boolean;
  /** Specify fallback values for the DNS resolver to use when it cannot resolve a DNS short name */
  domainOverrides?: string[];
  /** Log level to use when a DNS lookup fails. */
  lookupFailLogLevel?: LogLevelForFailedLookups;
};

export const functionConfSchemaDnsLookupSchema: Schema<FunctionConfSchemaDnsLookup> =
  s.object<FunctionConfSchemaDnsLookup>({
    dnsLookupFields: s.optional(s.array(s.lazy(() => dnsLookupFieldSchema))),
    reverseLookupFields: s.optional(s.array(s.lazy(() => reverseDnsLookupFieldSchema))),
    dnsServers: s.optional(s.array(s.string())),
    cacheTtl: s.optional(s.float64()),
    maxCacheSize: s.optional(s.float64()),
    useResolvConf: s.optional(s.boolean()),
    lookupFallback: s.optional(s.boolean()),
    domainOverrides: s.optional(s.array(s.string())),
    lookupFailLogLevel: s.optional(s.lazy(() => logLevelForFailedLookupsSchema)),
    _keysMap: {
      cacheTtl: "cacheTTL",
    },
  });
