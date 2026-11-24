import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { AsnWhois } from "./resources/asn-whois.js";
import { DatabasesAsnWhois } from "./resources/databases-asn-whois.js";
import { DatabasesDns } from "./resources/databases-dns.js";
import { DatabasesExpiringDropped } from "./resources/databases-expiring-dropped.js";
import { DatabasesIpGeolocation } from "./resources/databases-ip-geolocation.js";
import { DatabasesIpSecurity } from "./resources/databases-ip-security.js";
import { DatabasesIpWhois } from "./resources/databases-ip-whois.js";
import { DatabasesNewlyRegistered } from "./resources/databases-newly-registered.js";
import { DatabasesSubdomains } from "./resources/databases-subdomains.js";
import { DatabasesThreatFeed } from "./resources/databases-threat-feed.js";
import { DatabasesWhois } from "./resources/databases-whois.js";
import { Dns } from "./resources/dns.js";
import { DomainAvailability } from "./resources/domain-availability.js";
import { DomainReputation } from "./resources/domain-reputation.js";
import { Geolocation } from "./resources/geolocation.js";
import { IpReputation } from "./resources/ip-reputation.js";
import { IpWhois } from "./resources/ip-whois.js";
import { Ssl } from "./resources/ssl.js";
import { Subdomains } from "./resources/subdomains.js";
import { Typosquatting } from "./resources/typosquatting.js";
import { Whois } from "./resources/whois.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Complete WhoisFreaks API — WHOIS, DNS, SSL, Geolocation, Typosquatting, IP Intelligence, Domain
 * Reputation, and bulk database downloads.
 *
 * ## Authentication
 * All requests require an `apiKey` query parameter.
 *
 * ## Resources
 * - Docs: https://whoisfreaks.com/documentation
 * - Billing: https://billing.whoisfreaks.com
 * - Support: support@whoisfreaks.com
 */
export class WhoisFreaksClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #asnWhois?: AsnWhois;
  #databasesAsnWhois?: DatabasesAsnWhois;
  #databasesDns?: DatabasesDns;
  #databasesExpiringDropped?: DatabasesExpiringDropped;
  #databasesIpGeolocation?: DatabasesIpGeolocation;
  #databasesIpSecurity?: DatabasesIpSecurity;
  #databasesIpWhois?: DatabasesIpWhois;
  #databasesNewlyRegistered?: DatabasesNewlyRegistered;
  #databasesSubdomains?: DatabasesSubdomains;
  #databasesThreatFeed?: DatabasesThreatFeed;
  #databasesWhois?: DatabasesWhois;
  #dns?: Dns;
  #domainAvailability?: DomainAvailability;
  #domainReputation?: DomainReputation;
  #geolocation?: Geolocation;
  #ipReputation?: IpReputation;
  #ipWhois?: IpWhois;
  #ssl?: Ssl;
  #subdomains?: Subdomains;
  #typosquatting?: Typosquatting;
  #whois?: Whois;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "WHOIS_FREAKS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "WhoisFreaksClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Account, API key, and usage utilities
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Autonomous System Number WHOIS
   */
  get asnWhois(): AsnWhois {
    return (this.#asnWhois ??= new AsnWhois(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * ASN WHOIS database snapshots
   */
  get databasesAsnWhois(): DatabasesAsnWhois {
    return (this.#databasesAsnWhois ??= new DatabasesAsnWhois(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * DNS database snapshots
   */
  get databasesDns(): DatabasesDns {
    return (this.#databasesDns ??= new DatabasesDns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Expiring and dropped domain downloads
   */
  get databasesExpiringDropped(): DatabasesExpiringDropped {
    return (this.#databasesExpiringDropped ??= new DatabasesExpiringDropped(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * IP geolocation database snapshots
   */
  get databasesIpGeolocation(): DatabasesIpGeolocation {
    return (this.#databasesIpGeolocation ??= new DatabasesIpGeolocation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * IP security database snapshots
   */
  get databasesIpSecurity(): DatabasesIpSecurity {
    return (this.#databasesIpSecurity ??= new DatabasesIpSecurity(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * IP WHOIS database snapshots
   */
  get databasesIpWhois(): DatabasesIpWhois {
    return (this.#databasesIpWhois ??= new DatabasesIpWhois(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Newly registered domain downloads
   */
  get databasesNewlyRegistered(): DatabasesNewlyRegistered {
    return (this.#databasesNewlyRegistered ??= new DatabasesNewlyRegistered(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Subdomain database snapshots
   */
  get databasesSubdomains(): DatabasesSubdomains {
    return (this.#databasesSubdomains ??= new DatabasesSubdomains(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get databasesThreatFeed(): DatabasesThreatFeed {
    return (this.#databasesThreatFeed ??= new DatabasesThreatFeed(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * WHOIS database snapshots
   */
  get databasesWhois(): DatabasesWhois {
    return (this.#databasesWhois ??= new DatabasesWhois(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * DNS lookup APIs (live, historical, reverse, bulk)
   */
  get dns(): Dns {
    return (this.#dns ??= new Dns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Check domain availability
   */
  get domainAvailability(): DomainAvailability {
    return (this.#domainAvailability ??= new DomainAvailability(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Real-time domain threat assessment and trust scoring
   */
  get domainReputation(): DomainReputation {
    return (this.#domainReputation ??= new DomainReputation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * IP geolocation lookup
   */
  get geolocation(): Geolocation {
    return (this.#geolocation ??= new Geolocation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * IP threat intelligence
   */
  get ipReputation(): IpReputation {
    return (this.#ipReputation ??= new IpReputation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * IP address WHOIS
   */
  get ipWhois(): IpWhois {
    return (this.#ipWhois ??= new IpWhois(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * SSL certificate lookup
   */
  get ssl(): Ssl {
    return (this.#ssl ??= new Ssl(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Subdomain enumeration
   */
  get subdomains(): Subdomains {
    return (this.#subdomains ??= new Subdomains(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Detect typo variants of brand domains
   */
  get typosquatting(): Typosquatting {
    return (this.#typosquatting ??= new Typosquatting(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * WHOIS lookup APIs (live, historical, reverse, bulk)
   */
  get whois(): Whois {
    return (this.#whois ??= new Whois(this.#rawClient, this.#servers, this.#auth));
  }
}
