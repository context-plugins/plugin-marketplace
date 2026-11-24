import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1BluetoothlookupResponseSchema,
  type V1BluetoothlookupResponse,
} from "../models/v1-bluetoothlookup-response.js";
import {
  v1BotdetectorResponseSchema,
  type V1BotdetectorResponse,
} from "../models/v1-botdetector-response.js";
import {
  v1ContentfilterRequestSchema,
  type V1ContentfilterRequest,
} from "../models/v1-contentfilter-request.js";
import {
  v1ContentfilterResponseSchema,
  type V1ContentfilterResponse,
} from "../models/v1-contentfilter-response.js";
import {
  v1IpblacklistlookupResponseSchema,
  type V1IpblacklistlookupResponse,
} from "../models/v1-ipblacklistlookup-response.js";
import { v1IplookupResponseSchema, type V1IplookupResponse } from "../models/v1-iplookup-response.js";
import {
  v1MacaddresslookupResponseSchema,
  type V1MacaddresslookupResponse,
} from "../models/v1-macaddresslookup-response.js";
import {
  v1NameserversResponseSchema,
  type V1NameserversResponse,
} from "../models/v1-nameservers-response.js";
import {
  v1PhishingcheckRequestSchema,
  type V1PhishingcheckRequest,
} from "../models/v1-phishingcheck-request.js";
import {
  v1PhishingcheckResponseSchema,
  type V1PhishingcheckResponse,
} from "../models/v1-phishingcheck-response.js";
import { v1PingerRequestSchema, type V1PingerRequest } from "../models/v1-pinger-request.js";
import { v1PingerResponseSchema, type V1PingerResponse } from "../models/v1-pinger-response.js";
import { v1TldlookupResponseSchema, type V1TldlookupResponse } from "../models/v1-tldlookup-response.js";
import { v1TlscheckResponseSchema, type V1TlscheckResponse } from "../models/v1-tlscheck-response.js";
import { v1TordetectResponseSchema, type V1TordetectResponse } from "../models/v1-tordetect-response.js";
import {
  v1UsbvendorlookupResponseSchema,
  type V1UsbvendorlookupResponse,
} from "../models/v1-usbvendorlookup-response.js";
import {
  v1VpndetectorResponseSchema,
  type V1VpndetectorResponse,
} from "../models/v1-vpndetector-response.js";
import type { Servers } from "../servers.js";

export class Networking {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bluetooth Company Lookup
   *
   * @remarks
   * Lookup Bluetooth company/manufacturer by company ID
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.BluetoothlookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bluetoothlookup(
    request: Networking.BluetoothlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BluetoothlookupResponse, Networking.BluetoothlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bluetoothlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "companyid", value: request.companyid, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BluetoothlookupResponseSchema },
        errorFactory: Networking.BluetoothlookupError,
      },
      options,
    );
  }

  /**
   * Bot Detector
   *
   * @remarks
   * Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns
   * detailed information about the bot type and category.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.BotdetectorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  botdetector(
    request: Networking.BotdetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BotdetectorResponse, Networking.BotdetectorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/botdetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "ua", value: request.ua, schema: s.string() },
          { name: "ip", value: request.ip, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BotdetectorResponseSchema },
        errorFactory: Networking.BotdetectorError,
      },
      options,
    );
  }

  /**
   * Content Filter
   *
   * @remarks
   * Checks whether a URL or domain appears in the content filter blocklist covering fake news,
   * gambling, adult content, and social media.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.ContentfilterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contentfilter(
    request: Networking.ContentfilterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ContentfilterResponse, Networking.ContentfilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contentfilter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ContentfilterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ContentfilterResponseSchema },
        errorFactory: Networking.ContentfilterError,
      },
      options,
    );
  }

  /**
   * IP Blacklist Lookup
   *
   * @remarks
   * Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination)
   * blocklists and returns threat level assessment with geolocation details.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.IpblacklistlookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ipblacklistlookup(
    request: Networking.IpblacklistlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IpblacklistlookupResponse, Networking.IpblacklistlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ipblacklistlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IpblacklistlookupResponseSchema },
        errorFactory: Networking.IpblacklistlookupError,
      },
      options,
    );
  }

  /**
   * IP Lookup
   *
   * @remarks
   * Lookup the details and location of an IP address
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.IplookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  iplookup(
    request: Networking.IplookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IplookupResponse, Networking.IplookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/iplookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IplookupResponseSchema },
        errorFactory: Networking.IplookupError,
      },
      options,
    );
  }

  /**
   * MAC Address Lookup
   *
   * @remarks
   * Lookup MAC address data based on the MAC address
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.MacaddresslookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  macaddresslookup(
    request: Networking.MacaddresslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MacaddresslookupResponse, Networking.MacaddresslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/macaddresslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "mac", value: request.mac, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MacaddresslookupResponseSchema },
        errorFactory: Networking.MacaddresslookupError,
      },
      options,
    );
  }

  /**
   * Nameservers
   *
   * @remarks
   * Get the authoritative nameservers for a domain including IP addresses and owner information.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.NameserversError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nameservers(
    request: Networking.NameserversRequest,
    options?: RequestOptions,
  ): ApiPromise<V1NameserversResponse, Networking.NameserversError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nameservers"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NameserversResponseSchema },
        errorFactory: Networking.NameserversError,
      },
      options,
    );
  }

  /**
   * Phishing Domain Checker
   *
   * @remarks
   * Checks whether a domain is in the active phishing database
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.PhishingcheckError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  phishingcheck(
    request: Networking.PhishingcheckRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PhishingcheckResponse, Networking.PhishingcheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/phishingcheck"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1PhishingcheckRequestSchema },
      },
      {
        success: { kind: "json", schema: v1PhishingcheckResponseSchema },
        errorFactory: Networking.PhishingcheckError,
      },
      options,
    );
  }

  /**
   * Domain and IP Pinger
   *
   * @remarks
   * Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating
   * whether the URL is up or not.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.PingerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinger(
    request: Networking.PingerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PingerResponse, Networking.PingerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/pinger"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1PingerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1PingerResponseSchema },
        errorFactory: Networking.PingerError,
      },
      options,
    );
  }

  /**
   * TLD Lookup
   *
   * @remarks
   * Retrieves the type and sponsoring organization for a given top-level domain.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.TldlookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tldlookup(
    request: Networking.TldlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TldlookupResponse, Networking.TldlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tldlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "tld", value: request.tld, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TldlookupResponseSchema },
        errorFactory: Networking.TldlookupError,
      },
      options,
    );
  }

  /**
   * TLS Checker
   *
   * @remarks
   * TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP
   * address. It reports supported protocols, cipher suites, and potential vulnerabilities.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.TlscheckError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tlscheck(
    request: Networking.TlscheckRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TlscheckResponse, Networking.TlscheckError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tlscheck"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "port", value: request.port, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TlscheckResponseSchema },
        errorFactory: Networking.TlscheckError,
      },
      options,
    );
  }

  /**
   * Tor Node Detector
   *
   * @remarks
   * Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node.
   * Useful for security, access control, and analytics.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.TordetectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tordetect(
    request: Networking.TordetectRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TordetectResponse, Networking.TordetectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/tordetect"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TordetectResponseSchema },
        errorFactory: Networking.TordetectError,
      },
      options,
    );
  }

  /**
   * USB Vendor Lookup
   *
   * @remarks
   * Lookup USB vendor and optionally product information by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.UsbvendorlookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usbvendorlookup(
    request: Networking.UsbvendorlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UsbvendorlookupResponse, Networking.UsbvendorlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/usbvendorlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "vendorid", value: request.vendorid, schema: s.string() },
          { name: "productid", value: request.productid, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UsbvendorlookupResponseSchema },
        errorFactory: Networking.UsbvendorlookupError,
      },
      options,
    );
  }

  /**
   * VPN Proxy Detector
   *
   * @remarks
   * VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating
   * whether the IP address is using a VPN or not.
   *
   * @returns Successful Response
   *
   * @throws {@link Networking.VpndetectorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vpndetector(
    request: Networking.VpndetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VpndetectorResponse, Networking.VpndetectorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/vpndetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1VpndetectorResponseSchema },
        errorFactory: Networking.VpndetectorError,
      },
      options,
    );
  }
}

export namespace Networking {
  export type BluetoothlookupRequest = {
    /**
     * The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C
     * for Apple.
     */
    companyid: string;
  };

  export class BluetoothlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BluetoothlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BotdetectorRequest = {
    /** The user agent string to analyze (URL encoded) */
    ua: string;
    /**
     * Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or
     * Apple crawler, it is checked against that operator's published IP ranges
     */
    ip?: string;
  };

  export class BotdetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BotdetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ContentfilterRequest = {
    body: V1ContentfilterRequest;
  };

  export class ContentfilterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContentfilterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IpblacklistlookupRequest = {
    /** The IP address to check against blocklists */
    ip: string;
  };

  export class IpblacklistlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IpblacklistlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IplookupRequest = {
    /** The IP address for which you want to get the location data (e.g., 173.172.81.20) */
    ip: string;
  };

  export class IplookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IplookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MacaddresslookupRequest = {
    /** The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26) */
    mac: string;
  };

  export class MacaddresslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MacaddresslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NameserversRequest = {
    /** The domain name to lookup nameservers for */
    domain: string;
  };

  export class NameserversError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NameserversError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PhishingcheckRequest = {
    body: V1PhishingcheckRequest;
  };

  export class PhishingcheckError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PhishingcheckError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PingerRequest = {
    body: V1PingerRequest;
  };

  export class PingerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PingerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TldlookupRequest = {
    /** The top-level domain to look up (with or without leading dot) */
    tld: string;
  };

  export class TldlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TldlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TlscheckRequest = {
    /** The domain to check the TLS/SSL configuration for */
    domain: string;
    /** The port to connect to (usually 443 for HTTPS) */
    port?: number;
  };

  export class TlscheckError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TlscheckError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TordetectRequest = {
    /** The IP address to check against the Tor exit node list */
    ip: string;
  };

  export class TordetectError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TordetectError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UsbvendorlookupRequest = {
    /** The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple) */
    vendorid: string;
    /** The USB product ID in 4-digit hex format (optional) */
    productid?: string;
  };

  export class UsbvendorlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsbvendorlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type VpndetectorRequest = {
    /** The IP address you want to check for VPN usage */
    ip: string;
  };

  export class VpndetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VpndetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
