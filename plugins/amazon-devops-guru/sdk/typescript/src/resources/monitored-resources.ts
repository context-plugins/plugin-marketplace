import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listMonitoredResourcesResponseSchema,
  type ListMonitoredResourcesResponse,
} from "../models/list-monitored-resources-response.js";
import {
  monitoredResourcesRequestSchema,
  type MonitoredResourcesRequest,
} from "../models/monitored-resources-request.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class MonitoredResources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Monitored Resources
   *
   * @remarks
   * Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
   *
   * @returns Success
   *
   * @throws {@link MonitoredResources.ListMonitoredResourcesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMonitoredResources(
    request: MonitoredResources.ListMonitoredResourcesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListMonitoredResourcesResponse, MonitoredResources.ListMonitoredResourcesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/monitoredResources"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => monitoredResourcesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listMonitoredResourcesResponseSchema },
        errorFactory: MonitoredResources.ListMonitoredResourcesError,
      },
      options,
    );
  }
}

export namespace MonitoredResources {
  export type ListMonitoredResourcesRequest = {
    body?: MonitoredResourcesRequest;
  };

  export class ListMonitoredResourcesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitoredResourcesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
