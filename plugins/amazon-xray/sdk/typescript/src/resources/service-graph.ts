import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getServiceGraphResultSchema,
  type GetServiceGraphResult,
} from "../models/get-service-graph-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { serviceGraphRequestSchema, type ServiceGraphRequest } from "../models/service-graph-request.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class ServiceGraph {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Service Graph
   *
   * @remarks
   * Retrieves a document that describes services that process incoming requests, and downstream
   * services that they call as a result. Root services process incoming requests and make calls to
   * downstream services. Root services are applications that use the Amazon Web Services X-Ray SDK.
   * Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or
   * SQL databases.
   *
   * @returns Success
   *
   * @throws {@link ServiceGraph.GetServiceGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServiceGraph(
    request: ServiceGraph.GetServiceGraphRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetServiceGraphResult, ServiceGraph.GetServiceGraphError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ServiceGraph"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => serviceGraphRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getServiceGraphResultSchema },
        errorFactory: ServiceGraph.GetServiceGraphError,
      },
      options,
    );
  }
}

export namespace ServiceGraph {
  export type GetServiceGraphRequest = {
    body?: ServiceGraphRequest;
  };

  export class GetServiceGraphError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceGraphError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
