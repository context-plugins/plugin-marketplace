import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { coverageSchema, type Coverage } from "../models/coverage.js";
import type { Servers } from "../servers.js";

/**
 * Patient insurance coverage / eligibility.
 */
export class CoverageApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read a Coverage resource by id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readCoverage(
    request: CoverageApi.ReadCoverageRequest,
    options?: RequestOptions,
  ): ApiPromise<Coverage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Coverage/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coverageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search Coverage resources
   *
   * @returns A FHIR Bundle of Coverage resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCoverage(
    request: CoverageApi.SearchCoverageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Coverage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "patient", value: request.patient, schema: s.optional(s.string()) },
          { name: "_count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CoverageApi {
  export type ReadCoverageRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type SearchCoverageRequest = {
    /** Reference to the subject Patient (e.g. Patient/{id}). */
    patient?: string;
    /** Number of results per page. */
    count?: number;
  };
}
