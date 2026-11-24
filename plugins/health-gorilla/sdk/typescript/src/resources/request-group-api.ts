import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { requestGroupSchema, type RequestGroup } from "../models/request-group.js";
import type { Servers } from "../servers.js";

/**
 * Parent diagnostic orders nesting individual ServiceRequest tests.
 */
export class RequestGroupApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit a diagnostic order
   *
   * @remarks
   * Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual
   * tests) for submission to a participating diagnostic laboratory or radiology partner.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRequestGroup(
    request: RequestGroupApi.CreateRequestGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestGroup, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/RequestGroup"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: requestGroupSchema },
      },
      {
        success: { kind: "json", schema: requestGroupSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Read a RequestGroup order by id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readRequestGroup(
    request: RequestGroupApi.ReadRequestGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestGroup, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/RequestGroup/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestGroupSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search RequestGroup orders
   *
   * @returns A FHIR Bundle of RequestGroup resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchRequestGroups(
    request: RequestGroupApi.SearchRequestGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/RequestGroup"),
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

export namespace RequestGroupApi {
  export type CreateRequestGroupRequest = {
    body: RequestGroup;
  };

  export type ReadRequestGroupRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type SearchRequestGroupsRequest = {
    /** Reference to the subject Patient (e.g. Patient/{id}). */
    patient?: string;
    /** Number of results per page. */
    count?: number;
  };
}
