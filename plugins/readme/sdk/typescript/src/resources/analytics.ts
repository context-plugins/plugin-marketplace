import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Page view, quality, and search analytics
 */
export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve Page View Statistics
   *
   * @returns Page view stats
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPageviews(
    request: Analytics.GetPageviewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pageviews"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Page Quality Scores
   *
   * @remarks
   * Returns quality scores produced by Docs Audit for the project's pages.
   *
   * @returns Quality scores
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQuality(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/quality"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Search Analytics
   *
   * @returns Search analytics
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSearch(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export type GetPageviewsRequest = {
    start?: string;
    end?: string;
  };
}
