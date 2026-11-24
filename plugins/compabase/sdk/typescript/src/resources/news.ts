import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { localeSchema, type Locale } from "../models/locale.js";
import type { Servers } from "../servers.js";

export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Company news & UGC
   *
   * @remarks
   * Published news articles and optional claimed description / logo from company UGC. Coverage is
   * uneven (only companies with portal/UGC content).
   *
   * @returns News and optional UGC fields (empty arrays/nulls when none).
   *
   * @throws {@link News.GetCompaniesKrsByKrsNewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsNews(
    request: News.GetCompaniesKrsByKrsNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, News.GetCompaniesKrsByKrsNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/news"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: News.GetCompaniesKrsByKrsNewsError,
      },
      options,
    );
  }

  /**
   * Latest company news feed
   *
   * @remarks
   * Latest news published by Polish companies on their own websites, newest first, with the company
   * (KRS) attached.
   *
   * @returns Page of news articles.
   *
   * @throws {@link News.GetNewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNews(
    request: News.GetNewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, News.GetNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/news"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "since", value: request.since, schema: s.optional(s.string()) },
          { name: "pkd", value: request.pkd, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "locale", value: request.locale, schema: s.optional(s.lazy(() => localeSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: News.GetNewsError,
      },
      options,
    );
  }
}

export namespace News {
  export type GetCompaniesKrsByKrsNewsRequest = {
    krs: string;
    /** @default "en" */
    locale?: string;
  };

  export class GetCompaniesKrsByKrsNewsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsNewsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetNewsRequest = {
    /** Only news published on or after this date (YYYY-MM-DD). */
    since?: string;
    /** 2–5 digit prefix of the company main PKD code (e.g. `62` for IT). */
    pkd?: string;
    /** Company seat city. */
    city?: string;
    /** Language of the returned titles. */
    locale?: Locale;
    /** Page size, 1–100 (default 50). */
    limit?: number;
    /** Zero-based offset (max 5000). */
    offset?: number;
  };

  export class GetNewsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetNewsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
