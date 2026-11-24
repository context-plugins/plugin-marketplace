import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Dev {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Dns Ep
   *
   * @remarks
   * Live DNS records for a domain via Cloudflare DNS-over-HTTPS. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Dev.DnsEpDnsGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsEpDnsGet(
    request: Dev.DnsEpDnsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dev.DnsEpDnsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dns"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "A") },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dev.DnsEpDnsGetError,
      },
      options,
    );
  }

  /**
   * Github Releases Ep
   *
   * @remarks
   * Latest GitHub releases for a repo (version, date, author, link) via the public atom feed —
   * keyless source, no rate limit. (Requires API key on REST; the MCP tool is keyless.)
   *
   * @returns Successful Response
   *
   * @throws {@link Dev.GithubReleasesEpGithubReleasesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  githubReleasesEpGithubReleasesGet(
    request: Dev.GithubReleasesEpGithubReleasesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dev.GithubReleasesEpGithubReleasesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/github-releases"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "repo", value: request.repo, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 5) },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dev.GithubReleasesEpGithubReleasesGetError,
      },
      options,
    );
  }

  /**
   * Hacker News Ep
   *
   * @remarks
   * Live Hacker News stories — the tech/AI attention layer. Optional case-insensitive title filter.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Dev.HackerNewsEpHackerNewsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hackerNewsEpHackerNewsGet(
    request: Dev.HackerNewsEpHackerNewsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dev.HackerNewsEpHackerNewsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/hacker-news"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "kind", value: request.kind, schema: s.defaulted(s.string(), "top") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dev.HackerNewsEpHackerNewsGetError,
      },
      options,
    );
  }
}

export namespace Dev {
  export type DnsEpDnsGetRequest = {
    /** domain, e.g. example.com */
    name: string;
    /** A | AAAA | MX | TXT | NS | CNAME | SOA | CAA @default "A" */
    type?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class DnsEpDnsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DnsEpDnsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GithubReleasesEpGithubReleasesGetRequest = {
    /** owner/name, e.g. openai/openai-python */
    repo: string;
    /** max releases (1-25) @default 5 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class GithubReleasesEpGithubReleasesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GithubReleasesEpGithubReleasesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type HackerNewsEpHackerNewsGetRequest = {
    query?: string;
    /** top | new | best @default "top" */
    kind?: string;
    /** max stories (1-30) @default 10 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class HackerNewsEpHackerNewsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<HackerNewsEpHackerNewsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
