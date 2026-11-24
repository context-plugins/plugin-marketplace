import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { serviceRequestSchema, type ServiceRequest } from "../models/service-request.js";
import type { Servers } from "../servers.js";

/**
 * Diagnostic (lab and radiology) order requests.
 */
export class ServiceRequestApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a ServiceRequest resource
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceRequest(
    request: ServiceRequestApi.CreateServiceRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceRequest, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ServiceRequest"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: serviceRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceRequestSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Read a ServiceRequest resource by id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readServiceRequest(
    request: ServiceRequestApi.ReadServiceRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceRequest, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ServiceRequest/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceRequestSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search ServiceRequest resources
   *
   * @returns A FHIR Bundle of ServiceRequest resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchServiceRequests(
    request: ServiceRequestApi.SearchServiceRequestsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ServiceRequest"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "patient", value: request.patient, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
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

export namespace ServiceRequestApi {
  export type CreateServiceRequestRequest = {
    body: ServiceRequest;
  };

  export type ReadServiceRequestRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type SearchServiceRequestsRequest = {
    /** Reference to the subject Patient (e.g. Patient/{id}). */
    patient?: string;
    status?: string;
    /** Number of results per page. */
    count?: number;
  };
}
