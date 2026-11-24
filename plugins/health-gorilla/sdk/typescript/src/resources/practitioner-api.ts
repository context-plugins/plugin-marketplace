import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { practitionerSchema, type Practitioner } from "../models/practitioner.js";
import type { Servers } from "../servers.js";

/**
 * Ordering and rendering providers.
 */
export class PractitionerApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read a Practitioner resource by id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readPractitioner(
    request: PractitionerApi.ReadPractitionerRequest,
    options?: RequestOptions,
  ): ApiPromise<Practitioner, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Practitioner/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: practitionerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search Practitioner resources
   *
   * @returns A FHIR Bundle of Practitioner resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPractitioners(
    request: PractitionerApi.SearchPractitionersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Practitioner"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "identifier", value: request.identifier, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
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

export namespace PractitionerApi {
  export type ReadPractitionerRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type SearchPractitionersRequest = {
    /** A resource identifier (system|value). */
    identifier?: string;
    /** A portion of the name. */
    name?: string;
    /** Number of results per page. */
    count?: number;
  };
}
