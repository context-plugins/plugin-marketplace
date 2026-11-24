import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { crawlJobRequestSchema, type CrawlJobRequest } from "./models/crawl-job-request.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * AI-powered web scraping and crawling API
 */
export class Crawl4AiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CRAWL4_AI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "Crawl4AiClient/1.0.0 TypeScript", schema: s.string() },
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
  }

  /**
   * Get Crawl Job Status
   *
   * @remarks
   * Get the status and results of a crawl job
   *
   * @returns Job status and results
   *
   * @throws {@link Crawl4AiClient.GetCrawlJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Crawl4AiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCrawlJob(
    request: Crawl4AiClient.GetCrawlJobRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Crawl4AiClient.GetCrawlJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/crawl/job/{jobId}"),
        auth: noneAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Crawl4AiClient.GetCrawlJobError,
      },
      options,
    );
  }

  /**
   * Submit Crawl Job
   *
   * @remarks
   * Submit a new web crawling job
   *
   * @returns Job submitted successfully
   *
   * @throws {@link Crawl4AiClient.SubmitCrawlJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Crawl4AiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitCrawlJob(
    request: Crawl4AiClient.SubmitCrawlJobRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Crawl4AiClient.SubmitCrawlJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/crawl/job"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: crawlJobRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Crawl4AiClient.SubmitCrawlJobError,
      },
      options,
    );
  }
}

export namespace Crawl4AiClient {
  export type GetCrawlJobRequest = {
    /** Job ID */
    jobId: string;
  };

  export class GetCrawlJobError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCrawlJobError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type SubmitCrawlJobRequest = {
    body: CrawlJobRequest;
  };

  export class SubmitCrawlJobError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SubmitCrawlJobError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
