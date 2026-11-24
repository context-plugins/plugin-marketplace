import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { bulkResultsSchema, type BulkResults } from "../models/bulk-results.js";
import { discoveryResultsSchema, type DiscoveryResults } from "../models/discovery-results.js";
import { errorSchema, type Error } from "../models/error.js";
import { intentResultsSchema, type IntentResults } from "../models/intent-results.js";
import type { Servers } from "../servers.js";

/**
 * Polling for asynchronous discovery results
 */
export class Results {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Poll for bulk enrichment results
   *
   * @remarks
   * Retrieves the results of a previously submitted bulk enrichment job.
   *
   * @returns The request is done
   *
   * @throws {@link Results.GetBulkEnrichmentResultsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBulkEnrichmentResults(
    request: Results.GetBulkEnrichmentResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkResults, Results.GetBulkEnrichmentResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/enrichment/results/{bulkId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bulkId", value: request.bulkId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkResultsSchema },
        errorFactory: Results.GetBulkEnrichmentResultsError,
      },
      options,
    );
  }

  /**
   * Poll for bulk discovery results
   *
   * @returns Request is done
   *
   * @throws {@link Results.GetDiscoveryResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiscoveryResults(
    request: Results.GetDiscoveryResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscoveryResults, Results.GetDiscoveryResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/expansion/results/{bulkId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "bulkId", value: request.bulkId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discoveryResultsSchema },
        errorFactory: Results.GetDiscoveryResultsError,
      },
      options,
    );
  }

  /**
   * Poll for intent scoring results
   *
   * @returns Intent results
   *
   * @throws {@link Results.GetIntentResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIntentResults(
    request: Results.GetIntentResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<IntentResults, Results.GetIntentResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/intent/results/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: intentResultsSchema },
        errorFactory: Results.GetIntentResultsError,
      },
      options,
    );
  }
}

export namespace Results {
  export type GetBulkEnrichmentResultsRequest = {
    /** The Leadspace bulk identifier returned when the job was accepted */
    bulkId: string;
  };

  export class GetBulkEnrichmentResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBulkEnrichmentResultsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDiscoveryResultsRequest = {
    /** The Leadspace bulk identifier returned when the job was accepted */
    bulkId: string;
  };

  export class GetDiscoveryResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDiscoveryResultsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetIntentResultsRequest = {
    /** The Leadspace bulk identifier returned when the job was accepted */
    jobId: string;
  };

  export class GetIntentResultsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetIntentResultsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 500, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
