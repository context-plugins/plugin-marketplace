import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import { sitesListResponseSchema, type SitesListResponse } from "../models/sites-list-response.js";
import { wmxSiteSchema, type WmxSite } from "../models/wmx-site.js";
import type { Servers } from "../servers.js";

export class Sites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add sites
   *
   * @remarks
   * Adds a site to the set of the user's sites in Search Console.
   *
   * @returns Successful response
   *
   * @throws {@link Sites.WebmastersSitesAddError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitesAdd(
    request: Sites.WebmastersSitesAddRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sites.WebmastersSitesAddError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "siteUrl", value: request.siteUrl, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sites.WebmastersSitesAddError,
      },
      options,
    );
  }

  /**
   * Delete sites
   *
   * @remarks
   * Removes a site from the set of the user's Search Console sites.
   *
   * @returns Successful response
   *
   * @throws {@link Sites.WebmastersSitesDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitesDelete(
    request: Sites.WebmastersSitesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sites.WebmastersSitesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "siteUrl", value: request.siteUrl, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sites.WebmastersSitesDeleteError,
      },
      options,
    );
  }

  /**
   * Get sites
   *
   * @remarks
   * Retrieves information about specific site.
   *
   * @returns Successful response
   *
   * @throws {@link Sites.WebmastersSitesGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitesGet(
    request: Sites.WebmastersSitesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WmxSite, Sites.WebmastersSitesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "siteUrl", value: request.siteUrl, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: wmxSiteSchema },
        errorFactory: Sites.WebmastersSitesGetError,
      },
      options,
    );
  }

  /**
   * List sites
   *
   * @remarks
   * Lists the user's Search Console sites.
   *
   * @returns Successful response
   *
   * @throws {@link Sites.WebmastersSitesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitesList(
    options?: RequestOptions,
  ): ApiPromise<SitesListResponse, Sites.WebmastersSitesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webmasters/v3/sites"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sitesListResponseSchema },
        errorFactory: Sites.WebmastersSitesListError,
      },
      options,
    );
  }
}

export namespace Sites {
  export type WebmastersSitesAddRequest = {
    /** The URL of the site to add. */
    siteUrl: string;
  };

  export class WebmastersSitesAddError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitesAddError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type WebmastersSitesDeleteRequest = {
    /**
     * The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/`
     * or `sc-domain:example.com`.
     */
    siteUrl: string;
  };

  export class WebmastersSitesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type WebmastersSitesGetRequest = {
    /**
     * The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/`
     * or `sc-domain:example.com`.
     */
    siteUrl: string;
  };

  export class WebmastersSitesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export class WebmastersSitesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
