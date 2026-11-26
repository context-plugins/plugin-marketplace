import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  deepcrawlAcceptedResponseSchema,
  type DeepcrawlAcceptedResponse,
} from "../models/deepcrawl-accepted-response.js";
import { deepcrawlRequestInternalSchema, type DeepcrawlRequest } from "../models/deepcrawl-request.js";
import {
  deepcrawlStatusResponseInternalSchema,
  type DeepcrawlStatusResponse,
} from "../models/deepcrawl-status-response.js";
import { extractRequestInternalSchema, type ExtractRequest } from "../models/extract-request.js";
import { extractResponseInternalSchema, type ExtractResponse } from "../models/extract-response.js";
import { sitemapRequestInternalSchema, type SitemapRequest } from "../models/sitemap-request.js";
import { sitemapResponseInternalSchema, type SitemapResponse } from "../models/sitemap-response.js";
import { crawlRequest1InternalSchema, type CrawlRequest1 } from "../models/unions/crawl-request1.js";
import { crawlResponse1InternalSchema, type CrawlResponse1 } from "../models/unions/crawl-response1.js";
import type { Servers } from "../servers.js";

export class Crawl {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Crawl a URL and extract its content
   *
   * @remarks
   * Fetch one public URL and return its readable title and body as clean text, with navigation,
   * boilerplate, and scripts stripped. Use it on a URL the user supplied or one returned by POST
   * /search. To ingest a whole site rather than a single page, use POST /deepcrawl. Send an array
   * of request objects to crawl several URLs in one call: the response is an array containing only
   * the URLs that succeeded, in no guaranteed order, so match items back to your input by
   * `crawlParameters.url`; failed URLs are omitted and not charged. `enable_fallback` is accepted
   * as a snake_case alias of `enableFallback`. Costs 1 credit per request.
   *
   * @returns Successful response
   *
   * @throws {@link Crawl.CrawlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  crawl(
    request: Crawl.CrawlRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CrawlResponse1, Crawl.CrawlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/crawl"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: crawlRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: crawlResponse1InternalSchema },
        errorFactory: Crawl.CrawlError,
      },
      options,
    );
  }

  /**
   * Deep crawl a website across multiple pages
   *
   * @remarks
   * Start an asynchronous crawl of an entire site and package the pages as documents. Use it for
   * whole-site ingestion; a single page is POST /crawl. The call returns a task id immediately
   * rather than the result — poll GET /deepcrawl/status/{taskId} until the task reports completion.
   * Costs 20 credits per request.
   *
   * @returns Successful response
   *
   * @throws {@link Crawl.DeepcrawlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deepcrawl(
    request: Crawl.DeepcrawlRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeepcrawlAcceptedResponse, Crawl.DeepcrawlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/deepcrawl"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deepcrawlRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: deepcrawlAcceptedResponseSchema },
        errorFactory: Crawl.DeepcrawlError,
      },
      options,
    );
  }

  /**
   * Check deepcrawl task status
   *
   * @remarks
   * Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it
   * finishes, where to retrieve the packaged result. Safe to call repeatedly. Free to call.
   *
   * @returns Successful response
   *
   * @throws {@link Crawl.DeepcrawlStatusError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deepcrawlStatus(
    request: Crawl.DeepcrawlStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DeepcrawlStatusResponse, Crawl.DeepcrawlStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/deepcrawl/status/{taskId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "taskId", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deepcrawlStatusResponseInternalSchema },
        errorFactory: Crawl.DeepcrawlStatusError,
      },
      options,
    );
  }

  /**
   * Extract structured content from a URL
   *
   * @remarks
   * Pull structured data out of a single webpage using a natural-language prompt and a JSON schema
   * you supply. Use it when you need specific fields — prices, specifications, contact details —
   * rather than the whole document; when you want the full text, use POST /crawl. Costs 10 credits
   * per request.
   *
   * @returns Successful response
   *
   * @throws {@link Crawl.ExtractError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extract(
    request: Crawl.ExtractRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ExtractResponse, Crawl.ExtractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/extract"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: extractRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: extractResponseInternalSchema },
        errorFactory: Crawl.ExtractError,
      },
      options,
    );
  }

  /**
   * Extract sitemap URLs from a website
   *
   * @remarks
   * Discover the public URLs of a site when you need to know which pages exist before fetching any
   * of them — scoping a crawl, auditing coverage, or locating a section. With the default `type:
   * "sitemap"` this reads the site's own sitemap: `Sitemap:` directives in robots.txt first, then
   * the conventional paths, following sitemap index files and gzipped sitemaps, and returns the
   * URLs it declares for the requested host. A site that publishes no sitemap falls back to the
   * links found on the given page. Use `type: "all"` to skip the sitemap and get every link on that
   * one page instead, including links to other hosts. Neither mode fetches page content. Costs 1
   * credit per request.
   *
   * @returns Successful response
   *
   * @throws {@link Crawl.SitemapError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sitemap(
    request: Crawl.SitemapRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SitemapResponse, Crawl.SitemapError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sitemap"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sitemapRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: sitemapResponseInternalSchema },
        errorFactory: Crawl.SitemapError,
      },
      options,
    );
  }
}

export namespace Crawl {
  export type CrawlRequestParams = {
    body: CrawlRequest1;
  };

  export class CrawlError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Declared<"apiErrorModel8", ApiErrorModel>
      | Declared<"apiErrorModel9", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CrawlError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 410, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel8", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel9", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type DeepcrawlRequestParams = {
    body: DeepcrawlRequest;
  };

  export class DeepcrawlError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeepcrawlError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type DeepcrawlStatusRequest = {
    taskId: string;
  };

  export const deepcrawlStatusRequestSchema: Schema<DeepcrawlStatusRequest> = s.lazySchema(() =>
    s.object<DeepcrawlStatusRequest>({
      taskId: s.string().check(s.minLength(1)),
    }),
  );

  export class DeepcrawlStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeepcrawlStatusError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 404, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type ExtractRequestParams = {
    body: ExtractRequest;
  };

  export class ExtractError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExtractError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type SitemapRequestParams = {
    body: SitemapRequest;
  };

  export class SitemapError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SitemapError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
