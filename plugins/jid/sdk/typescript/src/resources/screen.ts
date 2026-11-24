import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { screenResultInternalSchema, type ScreenResult } from "../models/screen-result.js";
import {
  v1EmailCheckRequestInternalSchema,
  type V1EmailCheckRequest,
} from "../models/v1-email-check-request.js";
import { v1ScreenRequestInternalSchema, type V1ScreenRequest } from "../models/v1-screen-request.js";
import type { Servers } from "../servers.js";

/**
 * Engage or not: a fast, deterministic answer for a lead, sender, vendor or website
 */
export class Screen {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Is this e-mail really from who it says? (raw headers in, checks and read out)
   *
   * @remarks
   * No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's
   * Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs
   * From, and whether the From domain or a business display name imitates a known company's
   * registered domain. Returns checks and a read (headline, engage | verify_first | do_not_engage,
   * failed checks, lookup links), the From and Reply-To domains and the authentication results. The
   * headers are processed in memory and never stored. Deterministic, no AI.
   *
   * @returns Checks and read
   *
   * @throws {@link Screen.EmailCheckError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  emailCheck(
    request: Screen.EmailCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Screen.EmailCheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/email-check"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1EmailCheckRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Screen.EmailCheckError,
      },
      options,
    );
  }

  /**
   * Should you engage? A fast, deterministic engage-or-not answer
   *
   * @remarks
   * No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any
   * of domain, url, email, phone or company_name; the context; an amount; a policy. Returns engage
   * (true/false), risk, confidence, subject_type, reasons with sources, mitigations, checks, a read
   * (headline, engage | verify_first | do_not_engage, failed checks, lookup links: render the read
   * for humans), the matched Jid file and a signed receipt. Hard rules (engage=false under every
   * policy): confirmed exclusion, possible sanctions or export-list name match (manual review,
   * never a finding), registry hard failure, phishing or malware listing, disposable e-mail, domain
   * with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and
   * (strict only) an affiliation mismatch. Individuals get technical signals only. engage is
   * advisory. Rules version 2026-10-05.2: https://jid.com/screen-rules
   *
   * @returns Screen result
   *
   * @throws {@link Screen.ScreenError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  screen(
    request: Screen.ScreenRequest,
    options?: RequestOptions,
  ): ApiPromise<ScreenResult, Screen.ScreenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/screen"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ScreenRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: screenResultInternalSchema },
        errorFactory: Screen.ScreenError,
      },
      options,
    );
  }

  /**
   * Should you engage? (query parameters)
   *
   * @remarks
   * Same as POST /v1/screen, with the fields as query parameters.
   *
   * @returns Screen result
   *
   * @throws {@link Screen.ScreenGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  screenGet(
    request: Screen.ScreenGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ScreenResult, Screen.ScreenGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/screen"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "phone", value: request.phone, schema: s.optional(s.string()) },
          { name: "company_name", value: request.companyName, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "context", value: request.context, schema: s.optional(s.string()) },
          { name: "policy", value: request.policy, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.float64()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "ip_country", value: request.ipCountry, schema: s.optional(s.string()) },
          { name: "ip_region", value: request.ipRegion, schema: s.optional(s.string()) },
          { name: "ip_asn", value: request.ipAsn, schema: s.optional(s.string()) },
          { name: "browser_timezone", value: request.browserTimezone, schema: s.optional(s.string()) },
          { name: "stated_country", value: request.statedCountry, schema: s.optional(s.string()) },
          { name: "signal", value: request.signal, schema: s.optional(s.string()) },
          { name: "site", value: request.site, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: screenResultInternalSchema },
        errorFactory: Screen.ScreenGetError,
      },
      options,
    );
  }
}

export namespace Screen {
  export type EmailCheckRequest = {
    body: V1EmailCheckRequest;
  };

  export class EmailCheckError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmailCheckError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ScreenRequest = {
    body: V1ScreenRequest;
  };

  export class ScreenError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScreenError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ScreenGetRequest = {
    domain?: string;
    url?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    name?: string;
    context?: string;
    policy?: string;
    amount?: number;
    country?: string;
    ipCountry?: string;
    ipRegion?: string;
    ipAsn?: string;
    browserTimezone?: string;
    statedCountry?: string;
    signal?: string;
    site?: string;
  };

  export class ScreenGetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScreenGetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
