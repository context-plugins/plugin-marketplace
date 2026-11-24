import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class JobsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Job Log Output
   *
   * @returns Log content
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobLog(request: JobsApi.GetJobLogRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/log",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
          { name: "number", value: request.number, schema: s.int() },
          { name: "job", value: request.job, schema: s.string() },
        ],
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
   * Retry A Job
   *
   * @returns Job retried
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryJob(request: JobsApi.RetryJobRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/organizations/{org}/pipelines/{pipeline}/builds/{number}/jobs/{job}/retry",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
          { name: "number", value: request.number, schema: s.int() },
          { name: "job", value: request.job, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

export namespace JobsApi {
  export type GetJobLogRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
    /** Job UUID */
    job: string;
  };

  export type RetryJobRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
    /** Build number */
    number: number;
    /** Job UUID */
    job: string;
  };
}
