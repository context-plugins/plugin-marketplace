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
import { sitemapsListResponseSchema, type SitemapsListResponse } from "../models/sitemaps-list-response.js";
import { wmxSitemapSchema, type WmxSitemap } from "../models/wmx-sitemap.js";
import type { Servers } from "../servers.js";

export class Sitemaps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete sitemaps
   *
   * @remarks
   * Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or
   * the URLs that were previously crawled in the deleted sitemap.
   *
   * @returns Successful response
   *
   * @throws {@link Sitemaps.WebmastersSitemapsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitemapsDelete(
    request: Sitemaps.WebmastersSitemapsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sitemaps.WebmastersSitemapsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "siteUrl", value: request.siteUrl, schema: s.string() },
          { name: "feedpath", value: request.feedpath, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sitemaps.WebmastersSitemapsDeleteError,
      },
      options,
    );
  }

  /**
   * Get sitemaps
   *
   * @remarks
   * Retrieves information about a specific sitemap.
   *
   * @returns Successful response
   *
   * @throws {@link Sitemaps.WebmastersSitemapsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitemapsGet(
    request: Sitemaps.WebmastersSitemapsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WmxSitemap, Sitemaps.WebmastersSitemapsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "siteUrl", value: request.siteUrl, schema: s.string() },
          { name: "feedpath", value: request.feedpath, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: wmxSitemapSchema },
        errorFactory: Sitemaps.WebmastersSitemapsGetError,
      },
      options,
    );
  }

  /**
   * List sitemaps
   *
   * @remarks
   * Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if
   * `sitemapIndex` is specified in the request).
   *
   * @returns Successful response
   *
   * @throws {@link Sitemaps.WebmastersSitemapsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitemapsList(
    request: Sitemaps.WebmastersSitemapsListRequest,
    options?: RequestOptions,
  ): ApiPromise<SitemapsListResponse, Sitemaps.WebmastersSitemapsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}/sitemaps"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "siteUrl", value: request.siteUrl, schema: s.string() }],
        query: [{ name: "sitemapIndex", value: request.sitemapIndex, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sitemapsListResponseSchema },
        errorFactory: Sitemaps.WebmastersSitemapsListError,
      },
      options,
    );
  }

  /**
   * Submit sitemaps
   *
   * @remarks
   * Submits a sitemap for a site.
   *
   * @returns Successful response
   *
   * @throws {@link Sitemaps.WebmastersSitemapsSubmitError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSitemapsSubmit(
    request: Sitemaps.WebmastersSitemapsSubmitRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sitemaps.WebmastersSitemapsSubmitError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "siteUrl", value: request.siteUrl, schema: s.string() },
          { name: "feedpath", value: request.feedpath, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sitemaps.WebmastersSitemapsSubmitError,
      },
      options,
    );
  }
}

export namespace Sitemaps {
  export type WebmastersSitemapsDeleteRequest = {
    /** The site's URL, including protocol. For example: `http://www.example.com/`. */
    siteUrl: string;
    /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
    feedpath: string;
  };

  export class WebmastersSitemapsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitemapsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type WebmastersSitemapsGetRequest = {
    /** The site's URL, including protocol. For example: `http://www.example.com/`. */
    siteUrl: string;
    /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
    feedpath: string;
  };

  export class WebmastersSitemapsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitemapsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type WebmastersSitemapsListRequest = {
    /** The site's URL, including protocol. For example: `http://www.example.com/`. */
    siteUrl: string;
    /** A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`. */
    sitemapIndex?: string;
  };

  export class WebmastersSitemapsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitemapsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type WebmastersSitemapsSubmitRequest = {
    /** The site's URL, including protocol. For example: `http://www.example.com/`. */
    siteUrl: string;
    /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
    feedpath: string;
  };

  export class WebmastersSitemapsSubmitError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSitemapsSubmitError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
