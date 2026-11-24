import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1BimivalidatorResponseSchema,
  type V1BimivalidatorResponse,
} from "../models/v1-bimivalidator-response.js";
import {
  v1DkimvalidatorResponseSchema,
  type V1DkimvalidatorResponse,
} from "../models/v1-dkimvalidator-response.js";
import {
  v1DmarcvalidatorResponseSchema,
  type V1DmarcvalidatorResponse,
} from "../models/v1-dmarcvalidator-response.js";
import { v1DnslookupResponseSchema, type V1DnslookupResponse } from "../models/v1-dnslookup-response.js";
import {
  v1DnspropagationResponseSchema,
  type V1DnspropagationResponse,
} from "../models/v1-dnspropagation-response.js";
import {
  v1DnsseccheckResponseSchema,
  type V1DnsseccheckResponse,
} from "../models/v1-dnsseccheck-response.js";
import {
  v1DomainavailabilityResponseSchema,
  type V1DomainavailabilityResponse,
} from "../models/v1-domainavailability-response.js";
import {
  v1DomainexpirationResponseSchema,
  type V1DomainexpirationResponse,
} from "../models/v1-domainexpiration-response.js";
import {
  v1FullyqualifieddomainResponseSchema,
  type V1FullyqualifieddomainResponse,
} from "../models/v1-fullyqualifieddomain-response.js";
import { v1MxlookupResponseSchema, type V1MxlookupResponse } from "../models/v1-mxlookup-response.js";
import {
  v1ReversednslookupResponseSchema,
  type V1ReversednslookupResponse,
} from "../models/v1-reversednslookup-response.js";
import {
  v1SpfvalidatorResponseSchema,
  type V1SpfvalidatorResponse,
} from "../models/v1-spfvalidator-response.js";
import { v1SslcheckerResponseSchema, type V1SslcheckerResponse } from "../models/v1-sslchecker-response.js";
import {
  v1SubdomainfinderResponseSchema,
  type V1SubdomainfinderResponse,
} from "../models/v1-subdomainfinder-response.js";
import { v1UrllookupRequestSchema, type V1UrllookupRequest } from "../models/v1-urllookup-request.js";
import { v1UrllookupResponseSchema, type V1UrllookupResponse } from "../models/v1-urllookup-response.js";
import { v1UrltitleRequestSchema, type V1UrltitleRequest } from "../models/v1-urltitle-request.js";
import { v1UrltitleResponseSchema, type V1UrltitleResponse } from "../models/v1-urltitle-response.js";
import {
  v1UrlunshortenerRequestSchema,
  type V1UrlunshortenerRequest,
} from "../models/v1-urlunshortener-request.js";
import {
  v1UrlunshortenerResponseSchema,
  type V1UrlunshortenerResponse,
} from "../models/v1-urlunshortener-response.js";
import {
  v1WhoislookupResponseSchema,
  type V1WhoislookupResponse,
} from "../models/v1-whoislookup-response.js";
import type { Servers } from "../servers.js";

export class DomainData {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BIMI Record Validator
   *
   * @remarks
   * BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain
   * owners to display verified logos in supported email clients.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.BimivalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bimivalidator(
    request: DomainData.BimivalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BimivalidatorResponse, DomainData.BimivalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bimivalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BimivalidatorResponseSchema },
        errorFactory: DomainData.BimivalidatorError,
      },
      options,
    );
  }

  /**
   * DKIM Validator
   *
   * @remarks
   * DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify
   * that they are present and correctly formatted.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DkimvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dkimvalidator(
    request: DomainData.DkimvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DkimvalidatorResponse, DomainData.DkimvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dkimvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "selector", value: request.selector, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DkimvalidatorResponseSchema },
        errorFactory: DomainData.DkimvalidatorError,
      },
      options,
    );
  }

  /**
   * DMARC Validator
   *
   * @remarks
   * DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance
   * (DMARC) record for a domain to ensure it is correctly configured.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DmarcvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dmarcvalidator(
    request: DomainData.DmarcvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DmarcvalidatorResponse, DomainData.DmarcvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dmarcvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DmarcvalidatorResponseSchema },
        errorFactory: DomainData.DmarcvalidatorError,
      },
      options,
    );
  }

  /**
   * DNS Lookup
   *
   * @remarks
   * Lookup the DNS records of a domain
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DnslookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnslookup(
    request: DomainData.DnslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DnslookupResponse, DomainData.DnslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dnslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DnslookupResponseSchema },
        errorFactory: DomainData.DnslookupError,
      },
      options,
    );
  }

  /**
   * DNS Propagation Checker
   *
   * @remarks
   * Check DNS propagation for a domain across global DNS servers
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DnspropagationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnspropagation(
    request: DomainData.DnspropagationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DnspropagationResponse, DomainData.DnspropagationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dnspropagation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DnspropagationResponseSchema },
        errorFactory: DomainData.DnspropagationError,
      },
      options,
    );
  }

  /**
   * DNSSEC Checker
   *
   * @remarks
   * Validate DNSSEC configuration for a domain
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DnsseccheckError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsseccheck(
    request: DomainData.DnsseccheckRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DnsseccheckResponse, DomainData.DnsseccheckError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dnsseccheck"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DnsseccheckResponseSchema },
        errorFactory: DomainData.DnsseccheckError,
      },
      options,
    );
  }

  /**
   * Domain Availability
   *
   * @remarks
   * Check if a domain is available
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DomainavailabilityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  domainavailability(
    request: DomainData.DomainavailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DomainavailabilityResponse, DomainData.DomainavailabilityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domainavailability"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DomainavailabilityResponseSchema },
        errorFactory: DomainData.DomainavailabilityError,
      },
      options,
    );
  }

  /**
   * Domain Expiration
   *
   * @remarks
   * Check the expiration date of a domain
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.DomainexpirationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  domainexpiration(
    request: DomainData.DomainexpirationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DomainexpirationResponse, DomainData.DomainexpirationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domainexpiration"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DomainexpirationResponseSchema },
        errorFactory: DomainData.DomainexpirationError,
      },
      options,
    );
  }

  /**
   * Fully Qualified Domain
   *
   * @remarks
   * Get the fully qualified domain name of an ip
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.FullyqualifieddomainError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fullyqualifieddomain(
    request: DomainData.FullyqualifieddomainRequest,
    options?: RequestOptions,
  ): ApiPromise<V1FullyqualifieddomainResponse, DomainData.FullyqualifieddomainError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/fullyqualifieddomain"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FullyqualifieddomainResponseSchema },
        errorFactory: DomainData.FullyqualifieddomainError,
      },
      options,
    );
  }

  /**
   * MX Lookup
   *
   * @remarks
   * MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for
   * the given domain.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.MxlookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mxlookup(
    request: DomainData.MxlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MxlookupResponse, DomainData.MxlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/mxlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MxlookupResponseSchema },
        errorFactory: DomainData.MxlookupError,
      },
      options,
    );
  }

  /**
   * Reverse DNS Lookup
   *
   * @remarks
   * Get the hostname associated with an IP address
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.ReversednslookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reversednslookup(
    request: DomainData.ReversednslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ReversednslookupResponse, DomainData.ReversednslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/reversednslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ReversednslookupResponseSchema },
        errorFactory: DomainData.ReversednslookupError,
      },
      options,
    );
  }

  /**
   * SPF Validator
   *
   * @remarks
   * SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if
   * it's valid and optionally whether a given IP address is authorized to send emails for that
   * domain.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.SpfvalidatorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  spfvalidator(
    request: DomainData.SpfvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SpfvalidatorResponse, DomainData.SpfvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/spfvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SpfvalidatorResponseSchema },
        errorFactory: DomainData.SpfvalidatorError,
      },
      options,
    );
  }

  /**
   * SSL Certificate Checker
   *
   * @remarks
   * Check the SSL certificate of a domain
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.SslcheckerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sslchecker(
    request: DomainData.SslcheckerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SslcheckerResponse, DomainData.SslcheckerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sslchecker"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SslcheckerResponseSchema },
        errorFactory: DomainData.SslcheckerError,
      },
      options,
    );
  }

  /**
   * Subdomain Finder
   *
   * @remarks
   * Subdomain Finder is a simple tool for finding all the available subdomains for a given domain.
   * It returns a list of all the available subdomains for the given domain.
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.SubdomainfinderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subdomainfinder(
    request: DomainData.SubdomainfinderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SubdomainfinderResponse, DomainData.SubdomainfinderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/subdomainfinder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "deepScan", value: request.deepScan, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SubdomainfinderResponseSchema },
        errorFactory: DomainData.SubdomainfinderError,
      },
      options,
    );
  }

  /**
   * URL Lookup
   *
   * @remarks
   * Lookup the location of a URL
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.UrllookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  urllookup(
    request: DomainData.UrllookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UrllookupResponse, DomainData.UrllookupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urllookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UrllookupRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UrllookupResponseSchema },
        errorFactory: DomainData.UrllookupError,
      },
      options,
    );
  }

  /**
   * URL Title
   *
   * @remarks
   * Get the title of a web page based on the URL
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.UrltitleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  urltitle(
    request: DomainData.UrltitleRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UrltitleResponse, DomainData.UrltitleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urltitle"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UrltitleRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UrltitleResponseSchema },
        errorFactory: DomainData.UrltitleError,
      },
      options,
    );
  }

  /**
   * URL Unshortener
   *
   * @remarks
   * Unshorten a shortened URL
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.UrlunshortenerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  urlunshortener(
    request: DomainData.UrlunshortenerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UrlunshortenerResponse, DomainData.UrlunshortenerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urlunshortener"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UrlunshortenerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UrlunshortenerResponseSchema },
        errorFactory: DomainData.UrlunshortenerError,
      },
      options,
    );
  }

  /**
   * WHOIS Lookup
   *
   * @remarks
   * Lookup domain registration data based on the domain name
   *
   * @returns Successful Response
   *
   * @throws {@link DomainData.WhoislookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whoislookup(
    request: DomainData.WhoislookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WhoislookupResponse, DomainData.WhoislookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/whoislookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WhoislookupResponseSchema },
        errorFactory: DomainData.WhoislookupError,
      },
      options,
    );
  }
}

export namespace DomainData {
  export type BimivalidatorRequest = {
    /** The domain to validate the BIMI record for */
    domain: string;
  };

  export class BimivalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BimivalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DkimvalidatorRequest = {
    /** The domain to validate the DKIM record for */
    domain: string;
    /**
     * The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common
     * selectors is tried
     */
    selector?: string;
  };

  export class DkimvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DkimvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DmarcvalidatorRequest = {
    /** The domain to validate the DMARC record for */
    domain: string;
  };

  export class DmarcvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DmarcvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DnslookupRequest = {
    /**
     * The domain name for which you want to lookup the DNS records. Do not include the protocol,
     * and not subdomains (e.g., myspace.com)
     */
    domain: string;
  };

  export class DnslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DnslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DnspropagationRequest = {
    /** The domain name to check propagation for */
    domain: string;
    /** The DNS record type to check */
    type?: string;
  };

  export class DnspropagationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DnspropagationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DnsseccheckRequest = {
    /** The domain name to check DNSSEC configuration for */
    domain: string;
  };

  export class DnsseccheckError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DnsseccheckError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DomainavailabilityRequest = {
    /** The domain to check if it is available */
    domain: string;
  };

  export class DomainavailabilityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DomainavailabilityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DomainexpirationRequest = {
    /** The domain to check the expiration date of */
    domain: string;
  };

  export class DomainexpirationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DomainexpirationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FullyqualifieddomainRequest = {
    /** The IP address to get the fully qualified domain name of */
    ip: string;
  };

  export class FullyqualifieddomainError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FullyqualifieddomainError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MxlookupRequest = {
    /** The domain you want to get the MX records for (e.g. yahoo.com) */
    domain: string;
  };

  export class MxlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MxlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ReversednslookupRequest = {
    /** The IP address to lookup (IPv4 or IPv6) */
    ip: string;
  };

  export class ReversednslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReversednslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SpfvalidatorRequest = {
    /** The domain to validate the SPF record for */
    domain: string;
  };

  export class SpfvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SpfvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SslcheckerRequest = {
    /** The domain of the website to check the SSL certificate of */
    domain: string;
  };

  export class SslcheckerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SslcheckerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SubdomainfinderRequest = {
    /** The domain you want to find all the available subdomains for (e.g. google.com) */
    domain: string;
    /** Limit the number of subdomains to detect */
    limit?: number;
    /**
     * Search the full wordlist instead of only certificate transparency and common names. Slower,
     * and may still report complete: false when the time limit is reached
     */
    deepScan?: boolean;
  };

  export class SubdomainfinderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubdomainfinderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UrllookupRequest = {
    body: V1UrllookupRequest;
  };

  export class UrllookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UrllookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UrltitleRequest = {
    body: V1UrltitleRequest;
  };

  export class UrltitleError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UrltitleError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UrlunshortenerRequest = {
    body: V1UrlunshortenerRequest;
  };

  export class UrlunshortenerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UrlunshortenerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WhoislookupRequest = {
    /** The domain name for which you want to get the registration data (e.g., myspace.com) */
    domain: string;
  };

  export class WhoislookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WhoislookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
